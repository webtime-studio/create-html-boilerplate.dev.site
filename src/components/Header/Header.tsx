import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import {Buttons} from "../../components";
import "./header.scss";

interface HeaderProps {
  children: React.ReactNode | null;
}

const Header: React.FC<HeaderProps> = ({children: buttons}) => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <header className="header">
      <div className="header__content-wrapper">
        <h1 className="header__title">{siteConfig.title}</h1>
        <p className="header__slogan">{siteConfig.tagline}</p>
        <div className="header__buttons">
          {buttons}
        </div>
      </div>
    </header>
  );
};

export default Header;
