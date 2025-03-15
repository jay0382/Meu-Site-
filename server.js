require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const authRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Necessário para o Neon DB
    },
});

// Testar conexão com o banco
pool.connect()
    .then(() => console.log("Banco de dados conectado!"))
    .catch((err) => console.error("Erro ao conectar ao banco:", err));

// Rota de teste
app.get("/", (req, res) => {
    res.send("Servidor rodando...");
});

// Rotas de autenticação
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
