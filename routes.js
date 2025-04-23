const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { login, verificarStatus, registrarUsuario } = require("./authController");

// 🔹 Configuração do upload de imagem de perfil
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // pasta onde serão salvas
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// 🔹 Rotas
router.post("/login", login);
router.get("/status/:usuario_id", verificarStatus);
router.post("/register", upload.single("foto_perfil"), registrarUsuario); // nova rota com upload de imagem

module.exports = router;
