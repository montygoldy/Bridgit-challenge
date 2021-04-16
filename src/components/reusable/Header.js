import React from "react";

// Services
import i18n from '../../i18n';

// Images
import logo from '../../images/bridgitb-w.svg';

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" />
      <div className="app-header-title">{i18n.t("header__title")}</div>
    </header>
  );
}

export default Header;
