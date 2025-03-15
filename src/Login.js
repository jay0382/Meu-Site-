import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando Bootstrap
import "./Login.css"; // Arquivo CSS para estilização
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <div className="login-box p-5 rounded">
        <div className="text-center mb-3">
          <div className="avatar">
            <i className="fas fa-user-circle"></i> {/* Ícone de avatar */}
          </div>
        </div>
        <h3 className="text-center text-light mb-4">Login</h3>

        <form>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail ou Usuário"
            />
          </div>
          <div className="mb-4 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Senha"
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

