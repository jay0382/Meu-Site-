const express = require("express");
const router = express.Router();
const { login, verificarStatus } = require("./authController");

router.post("/login", login);
router.get("/status/:usuario_id", verificarStatus);

module.exports = router;
