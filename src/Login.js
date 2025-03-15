import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Função para processar o login com o backend real
  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("https://seu-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        // Armazenar token JWT no localStorage
        localStorage.setItem("token", data.token);
        alert("Login bem-sucedido! Redirecionando...");

        // Redirecionar para o dashboard
        navigate("/dashboard");
      } else {
        setError(data.msg || "Erro ao fazer login.");
      }
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
      console.error("Erro no login:", err);
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <div className="login-box p-5 rounded">
        <div className="text-center mb-3">
          <div className="avatar">
            <i className="fas fa-user-circle"></i> {/* Ícone de avatar */}
          </div>
        </div>
        <h3 className="text-center text-light mb-4">Login</h3>

        {/* Exibir mensagem de erro */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail ou Usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <i
              className={`fas ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } position-absolute end-0 top-50 translate-middle-y me-3`}
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          {/* Checkbox "Me lembre" */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              id="rememberMe"
            />
            <label className="form-check-label text-light" htmlFor="rememberMe">
              Me lembre
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>

        {/* Links adicionais */}
        <div className="text-center mt-4">
          <Link to="/esqueci-senha" className="text-link">
            Esqueci minha senha
          </Link>
          <span className="text-light mx-2">|</span>
          <Link to="/register" className="text-link">
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
