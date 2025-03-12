import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa"; // Ícones corrigidos
import "./Register.css"; // Importação do CSS

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const openCamera = () => {
    setCameraOpen(true);
  };

  const closeCamera = () => {
    setCameraOpen(false);
  };

  return (
    <div className="register-container d-flex align-items-center justify-content-center vh-100">
      <div className="register-box p-5 rounded">
        <div className="text-center mb-3">
          <div className="avatar">
            {profileImage ? (
              <img src={profileImage} alt="Foto de Perfil" className="avatar-img" />
            ) : (
              <FaUserCircle size={80} color="gray" /> // Ícone corrigido
            )}
          </div>
        </div>

        <h3 className="text-center text-light mb-4">Criar Conta</h3>

        <form>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Nome de Usuário"
              required
            />
          </div>

          <div className="mb-4 position-relative">
            <input
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              placeholder="Senha"
              required
            />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3"
              style={{ cursor: "pointer" }}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="mb-4 position-relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="form-control"
              placeholder="Confirmar Senha"
              required
            />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3"
              style={{ cursor: "pointer" }}
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="mb-4">
            <label className="file-upload btn btn-secondary w-100">
              📷 Enviar Foto de Perfil
              <input type="file" accept="image/*" onChange={handleFileChange} hidden />
            </label>
          </div>

          <div className="mb-4">
            <button
              type="button"
              className="btn btn-warning w-100"
              onClick={openCamera}
            >
              📸 Tirar Foto
            </button>
          </div>

          {cameraOpen && (
            <div className="camera-container text-center mb-4">
              <video autoPlay className="camera-view w-100 rounded"></video>
              <button
                onClick={closeCamera}
                className="btn btn-danger mt-2 w-100"
              >
                ❌ Fechar Câmera
              </button>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Criar Conta
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-link">
            Já tem conta? Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
