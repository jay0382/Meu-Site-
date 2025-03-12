import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
