import React from "react";
import { Modal, Button } from "react-bootstrap";

const PrivacyPolicyModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Política de Privacidade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>1. Informações Coletadas</strong></p>
        <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail e outros dados necessários para a criação de conta e acesso ao site.</p>

        <p><strong>2. Uso das Informações</strong></p>
        <p>As informações coletadas são usadas para personalizar a sua experiência, melhorar nossos serviços e fornecer suporte ao cliente.</p>

        <p><strong>3. Compartilhamento de Dados</strong></p>
        <p>Nós não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para cumprir uma solicitação de segurança.</p>

        <p><strong>4. Segurança das Informações</strong></p>
        <p>Adotamos medidas de segurança para proteger seus dados pessoais contra acessos não autorizados e perda de informações.</p>

        <p><strong>5. Cookies e Tecnologias de Rastreamento</strong></p>
        <p>Usamos cookies para melhorar a navegação e monitorar o uso do site. Você pode desativá-los a qualquer momento nas configurações do seu navegador.</p>

        <p><strong>6. Alterações na Política de Privacidade</strong></p>
        <p>Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página para se manter informado sobre eventuais mudanças.</p>

        <p><strong>7. Contato</strong></p>
        <p>Em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco por e-mail.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PrivacyPolicyModal;
