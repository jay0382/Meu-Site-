const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const geoip = require("geoip-lite");
const useragent = require("user-agent");
require("dotenv").config();

// 🔹 Conectar ao banco NeonDB
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// 🔹 Função para obter o IP real do usuário
const getRealIp = (req) => {
  let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (ip.includes(",")) {
    ip = ip.split(",")[0]; // Pega o primeiro IP se houver múltiplos
  }
  return ip.replace("::ffff:", ""); // Remove prefixo IPv6
};

// 🔹 LOGIN DO USUÁRIO
const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // 1️⃣ Buscar usuário no banco
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ msg: "E-mail ou senha incorretos" });
    }

    const usuario = result.rows[0];

    // 2️⃣ Verificar senha criptografada
    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaValida) {
      return res.status(401).json({ msg: "E-mail ou senha incorretos" });
    }

    // 3️⃣ Capturar informações do IP e dispositivo
    const ip = getRealIp(req);
    const geo = geoip.lookup(ip) || { city: "Desconhecido", country: "Desconhecido" };
    const userAgent = useragent.parse(req.headers["user-agent"]);

    // 4️⃣ Atualizar status de logins anteriores para `false`
    await pool.query(
      "UPDATE logins SET status_login = false WHERE usuario_id = $1",
      [usuario.id]
    );

    // 5️⃣ Registrar novo login no banco
    await pool.query(
      "INSERT INTO logins (usuario_id, ip, localizacao, dispositivo, sistema_operacional, navegador, status_login, data_login) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())",
      [
        usuario.id,
        ip,
        `${geo.city}, ${geo.country}`,
        userAgent.device.vendor || "Desconhecido",
        userAgent.os.name || "Desconhecido",
        userAgent.family || "Desconhecido",
        true, // Usuário logado
      ]
    );

    // 6️⃣ Gerar token JWT
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, nome: usuario.nome },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({ token, usuario: { id: usuario.id, nome: usuario.nome }, msg: "Login bem-sucedido!" });
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ msg: "Erro interno no servidor" });
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

// 🔹 EXPORTAR FUNÇÕES
module.exports = { login, verificarStatus };


// 🔹 REGISTRO DE USUÁRIO COM IMAGEM DE PERFIL
const registrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const fotoPerfil = req.file ? req.file.filename : null; // nome do arquivo salvo no servidor

  try {
    const existe = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    if (existe.rows.length > 0) {
      return res.status(400).json({ msg: "E-mail já cadastrado." });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    await pool.query(
      "INSERT INTO usuarios (nome, email, senha_hash, foto_perfil, criado_em) VALUES ($1, $2, $3, $4, NOW())",
      [nome, email, senhaHash, fotoPerfil]
    );

    res.status(201).json({ msg: "Conta criada com sucesso!" });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ msg: "Erro ao criar conta" });
  }
};

// 🔹 EXPORTAR TODAS AS FUNÇÕES
module.exports = { login, verificarStatus, registrarUsuario };
