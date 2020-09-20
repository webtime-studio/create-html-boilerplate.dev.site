import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import styles from "./header.module.css";
import { HeroBanner, Button } from "./styles";

const Header: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <HeroBanner className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Button>
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/")}
          >
            Get Started
          </Link>
        </Button>
      </div>
    </HeroBanner>
  );
};

export default Header;
