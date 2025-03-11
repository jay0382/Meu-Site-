import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando Bootstrap
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <h5>Siga-nos nas redes sociais</h5>
        <div className="d-flex justify-content-center gap-3 social-icons">
          <a href="https://www.facebook.com/seuperfil" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} />
          </a>
          <a href="https://www.twitter.com/seuperfil" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} />
          </a>
          <a href="https://www.instagram.com/cyberseconline2024" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://www.youtube.com/c/seucanal" target="_blank" rel="noopener noreferrer">
            <Youtube size={24} />
          </a>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <h5>Notícias de Tecnologia</h5>
            <ul>
              <li><a href="https://www.profissionaisti.com.br/" target="_blank">Profissionais TI</a></li>
              <li><a href="https://tecnoblog.net" target="_blank">Tecnoblog</a></li>
              <li><a href="https://www.theverge.com/tech" target="_blank">The Verge</a></li>
              <li><a href="https://canaltech.com.br" target="_blank">Canaltech</a></li>
              <li><a href="https://www.olhardigital.com.br" target="_blank">Olhar Digital</a></li>
              <li><a href="https://techcrunch.com" target="_blank">TechCrunch</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Notícias de Cibersegurança</h5>
            <ul>
              <li><a href="https://www.cnnbrasil.com.br/tudo-sobre/ciberseguranca/" target="_blank">CNN Brasil</a></li>
              <li><a href="https://www.cisoadvisor.com.br" target="_blank">Ciso Advisor</a></li>
              <li><a href="https://www.securityweek.com" target="_blank">Security Week</a></li>
              <li><a href="https://www.darkreading.com" target="_blank">Dark Reading</a></li>
              <li><a href="https://threatpost.com" target="_blank">Threat Post</a></li>
              <li><a href="https://www.krebsonsecurity.com" target="_blank">Krebs on Security</a></li>
              <li><a href="https://www.thehackernews.com" target="_blank">The Hacker News</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Ataques em Tempo Real</h5>
            <ul>
              <li><a href="https://cybermap.kaspersky.com" target="_blank">Kaspersky Cybermap</a></li>
              <li><a href="https://threatmap.fortiguard.com" target="_blank">Fortiguard Threat Map</a></li>
              <li><a href="https://threatmap.checkpoint.com" target="_blank">Checkpoint Threat Map</a></li>
              <li><a href="https://cyberthreat.realmap" target="_blank">Cyber Threat Map</a></li>
            </ul>
          </div>
        </div>

        {/* Política de Privacidade e Termos de Serviço */}
        <div className="legal-links mt-3">
          <a href="#">Política de Privacidade</a> |
          <a href="#">Termos de Serviço</a>
        </div>

        <p className="mt-3">&copy; 2024 CiberSecOnline. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
