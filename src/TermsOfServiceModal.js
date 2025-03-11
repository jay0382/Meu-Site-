import React from "react";
import { Modal, Button } from "react-bootstrap";

const TermsOfServiceModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Termos de Serviço</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>1. Aceitação dos Termos</strong></p>
        <p>Ao utilizar este site, você concorda com os Termos de Serviço descritos aqui.</p>

        <p><strong>2. Uso Permitido</strong></p>
        <p>O conteúdo deste site é fornecido apenas para fins informativos e educacionais.</p>

        <p><strong>3. Responsabilidades</strong></p>
        <p>Não nos responsabilizamos por qualquer uso indevido das informações apresentadas.</p>

        <p><strong>4. Modificações</strong></p>
        <p>Podemos atualizar estes termos periodicamente, e recomendamos a revisão frequente.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TermsOfServiceModal;
