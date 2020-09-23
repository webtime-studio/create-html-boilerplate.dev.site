import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Buttons from "../Buttons";
import "./header.scss";

const Header: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <header className="header">
      <div className="header__content-wrapper">
        <h1 className="header__title">{siteConfig.title}</h1>
        <p className="header__slogan">{siteConfig.tagline}</p>
        <div className="header__buttons">
          <Buttons left={'button--border-white header__button'} right={'button--background-white header__button'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
