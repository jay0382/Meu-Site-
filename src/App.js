import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import Login from "./Login"; // Página de Login
import Register from "./Register"; // Página de Criar Conta

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Página Principal com Header e Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer onPrivacyClick={() => setShowPrivacyModal(true)} />
              <CookieConsent />
              <PrivacyPolicyModal show={showPrivacyModal} handleClose={() => setShowPrivacyModal(false)} />
            </>
          }
        />

        {/* Página de Login (SEM Header e Footer) */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Página de Criar Conta (SEM Header e Footer) */}
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
