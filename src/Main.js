import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [mostrarTópicos, setMostrarTópicos] = useState(false);

  return (
    <>
      {/* Introdução ao site e Vídeo */}
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Vídeo */}
          <div className="col-lg-6 text-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Introdução ao site */}
          <div className="col-lg-6">
            <h1 className="text-primary">Bem-vindo ao CiberSecOnline!</h1>
            <p>
              Em um mundo cada vez mais digital, o aumento de golpes e ataques cibernéticos tornou a segurança online uma prioridade para todos. O <strong>CyberSecOnline</strong> foi criado para ajudar você a navegar com confiança e proteger suas informações no ambiente virtual.
            </p>
            <p>
              Aqui, você encontrará conteúdos educativos e práticos sobre como proteger suas redes sociais, detectar e prevenir ataques em redes wireless, utilizar ferramentas de segurança e muito mais.
            </p>
            <p>
              <span className="text-primary">Clique no vídeo ao lado</span> para obter mais informações sobre o nosso site.
            </p>
            <p>
              <strong>
                <span
                  id="mostrarCards"
                  className="toggle-link text-primary"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => setMostrarTópicos(!mostrarTópicos)}
                >
                  {mostrarTópicos ? "Ocultar tópicos" : "Clique aqui para explorar os tópicos"}
                </span>
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Cards */}
      {mostrarTópicos && (
        <div className="container mt-5">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/ciberseguranca.jpg" className="card-img-top" alt="Imagem Introdução Cibersegurança" />
                <div className="card-body">
                  <h5 className="card-title">Introdução à Cibersegurança</h5>
                  <p className="card-text">
                    Entenda as práticas e tecnologias essenciais para proteger sistemas e dados contra ataques digitais.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/Kali.png" className="card-img-top" alt="Imagem do Kali Linux" />
                <div className="card-body">
                  <h5 className="card-title">Introdução ao Kali Linux</h5>
                  <p className="card-text">
                    Conheça o sistema Kali Linux, uma das principais ferramentas para testes de penetração e segurança da informação.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/Ferramentas_Hacking.png" className="card-img-top" alt="Ferramentas de Hacking" />
                <div className="card-body">
                  <h5 className="card-title">Ferramentas de Hacking</h5>
                  <p className="card-text">
                    Explorando as principais ferramentas utilizadas por profissionais de segurança para testes de invasão.
                  </p>
                </div>
              </div>
            </div>

             {/* Card 4 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/Segurança_Wireless.jpeg" className="card-img-top" alt="Segurança em Redes Wireless" />
                <div className="card-body">
                  <h5 className="card-title">Segurança em Redes Wireless</h5>
                  <p className="card-text">
                    Aprenda como proteger redes sem fio contra ataques e entender as vulnerabilidades mais comuns.
                  </p>
                </div>
              </div>
            </div>

             {/* Card 5 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/Malware.jpg" className="card-img-top" alt="Malware" />
                <div className="card-body">
                  <h5 className="card-title">Malwares</h5>
                  <p className="card-text">
                    Compreenda o que são malwares e aprenda técnicas para se defender de vírus, ransomware e outras ameaças.
                  </p>
                </div>
              </div>
            </div>

              {/* Card 6 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="/images/Engenharia.jpeg" className="card-img-top" alt="Engenharia" />
                <div className="card-body">
                  <h5 className="card-title">Phishing e Engenharia Social</h5>
                  <p className="card-text">
                    Aprenda a identificar e se proteger contra tentativas de phishing e técnicas de manipulação psicológica usadas por invasores.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      )}
    </>
  );
};

export default Main;
