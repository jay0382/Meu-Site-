import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

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

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Política de Cookies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Usamos cookies para melhorar sua experiência no nosso site. Selecione suas preferências abaixo.</p>

          <Form.Check
            type="checkbox"
            label={<span>Cookies Essenciais (necessários para o funcionamento do site)</span>}
            checked={true}
            disabled
          />

          <Form.Check
            type="checkbox"
            label="Cookies de Desempenho (Google Analytics, etc.)"
            checked={cookies.desempenho}
            onChange={(e) => setCookies({ ...cookies, desempenho: e.target.checked })}
          />
          <Form.Check
            type="checkbox"
            label="Cookies Funcionais (salvam preferências do usuário)"
            checked={cookies.funcionais}
            onChange={(e) => setCookies({ ...cookies, funcionais: e.target.checked })}
          />
          <Form.Check
            type="checkbox"
            label="Cookies de Publicidade (anúncios personalizados)"
            checked={cookies.publicidade}
            onChange={(e) => setCookies({ ...cookies, publicidade: e.target.checked })}
          />
        </Form>

        <p>
          Para mais informações, leia nossa{" "}
          <a href="/politica-de-privacidade">Política de Privacidade</a>.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleSavePreferences}>
          Salvar Preferências
        </Button>
        <Button variant="primary" onClick={handleAcceptAll}>
          Aceitar Todos os Cookies
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CookieConsent;
