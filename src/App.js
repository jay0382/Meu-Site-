import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer onPrivacyClick={() => setShowPrivacyModal(true)} />
      <CookieConsent />
      <PrivacyPolicyModal show={showPrivacyModal} handleClose={() => setShowPrivacyModal(false)} />
    </div>
  );
}

export default App;
