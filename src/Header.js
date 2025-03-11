import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Título do site */}
        <a className="navbar-brand" href="#">CyberSecOn</a>
        
        {/* Botão hamburguer para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links do menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Quem Somos?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contato</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ferramentas Grátis</a>
            </li>
          </ul>
          
          {/* Botões de Entrar e Criar Conta */}
          <div className="d-flex">
            <button className="btn btn-outline-light me-2">Entrar</button>
            <button className="btn btn-primary">Criar Conta</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
