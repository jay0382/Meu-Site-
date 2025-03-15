import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [cookies, setCookies] = useState({
    essenciais: true, // Sempre ativo
    desempenho: false,
    funcionais: false,
    publicidade: false,
  });

  useEffect(() => {
    const savedCookies = JSON.parse(localStorage.getItem("cookies"));
    if (!savedCookies) {
      setShow(true);
    } else {
      setCookies(savedCookies);
    }
  }, []);

  const handleClose = () => setShow(false);

  const handleSavePreferences = () => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    setShow(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essenciais: true,
      desempenho: true,
      funcionais: true,
      publicidade: true,
    };
    localStorage.setItem("cookies", JSON.stringify(allAccepted));
    setCookies(allAccepted);
    setShow(false);
  };

  return show ? (
    <div className="cookie-modal">
      <div className="cookie-container">
        <button className="close-btn" onClick={handleClose}>&times;</button>
        <h2>Política de Cookies</h2>
        <p>Usamos cookies para melhorar sua experiência no nosso site. Selecione suas preferências abaixo.</p>

        <div className="cookie-options">
          <label>
            <input type="checkbox" checked={true} disabled />
            <span className="checkmark"></span>
            Cookies Essenciais (necessários para o funcionamento do site)
          </label>

          <label>
            <input type="checkbox" checked={cookies.desempenho} onChange={(e) => setCookies({ ...cookies, desempenho: e.target.checked })} />
            <span className="checkmark"></span>
            Cookies de Desempenho (Google Analytics, etc.)
          </label>

          <label>
            <input type="checkbox" checked={cookies.funcionais} onChange={(e) => setCookies({ ...cookies, funcionais: e.target.checked })} />
            <span className="checkmark"></span>
            Cookies Funcionais (salvam preferências do usuário)
          </label>

          <label>
            <input type="checkbox" checked={cookies.publicidade} onChange={(e) => setCookies({ ...cookies, publicidade: e.target.checked })} />
            <span className="checkmark"></span>
            Cookies de Publicidade (anúncios personalizados)
          </label>
        </div>

        <p>
          Para mais informações, leia nossa{" "}
          <a href="/politica-de-privacidade" className="link">Política de Privacidade</a>.
        </p>

        <div className="cookie-buttons">
          <button className="btn save" onClick={handleSavePreferences}>Salvar Preferências</button>
          <button className="btn accept" onClick={handleAcceptAll}>Aceitar Todos os Cookies</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieConsent;

