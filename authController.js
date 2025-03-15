const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const geoip = require("geoip-lite");
const useragent = require("user-agent");
require("dotenv").config();

// Conectar ao banco Neon DB
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Função para extrair o IP real do usuário
const getRealIp = (req) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (ip.includes(",")) {
    ip = ip.split(",")[0]; // Caso tenha múltiplos IPs, pega o primeiro
  }
  return ip.replace("::ffff:", ""); // Remove o prefixo IPv6, se existir
};

// 🔹 LOGIN DO USUÁRIO
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // 1️⃣ Buscar usuário no banco
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ msg: "Usuário não encontrado" });
    }

    const usuario = result.rows[0];

    // 2️⃣ Verificar senha criptografada
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ msg: "Senha incorreta" });
    }

    // 3️⃣ Capturar informações do dispositivo e IP
    const ip = getRealIp(req);
    const geo = geoip.lookup(ip) || { city: "Desconhecido", country: "Desconhecido" };
    const userAgent = useragent.parse(req.headers["user-agent"]);

    // 4️⃣ Registrar login no banco com status ativo
    await pool.query(
      "INSERT INTO logins (usuario_id, ip, localizacao, dispositivo, sistema_operacional, navegador, status_login) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        usuario.id,
        ip,
        `${geo.city}, ${geo.country}`,
        userAgent.device.vendor || "Desconhecido",
        userAgent.os.name || "Desconhecido",
        userAgent.family || "Desconhecido",
        true, // Status do login (usuário online)
      ]
    );

    // 5️⃣ Gerar token JWT
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({ token, msg: "Login bem-sucedido!" });
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ msg: "Erro interno" });
  }
};

// 🔹 VERIFICAR STATUS DO USUÁRIO
const verificarStatus = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const result = await pool.query(
      "SELECT status_login FROM logins WHERE usuario_id = $1 ORDER BY data_login DESC LIMIT 1",
      [usuario_id]
    );

    if (result.rows.length === 0) {
      return res.json({ online: false, msg: "Usuário nunca fez login." });
    }

    return res.json({ online: result.rows[0].status_login });
  } catch (error) {
    console.error("Erro ao verificar status:", error);
    return res.status(500).json({ msg: "Erro interno" });
  }
};

// 🔹 EXPORTAR MÓDULOS (corrigido)
module.exports = { login, verificarStatus };
