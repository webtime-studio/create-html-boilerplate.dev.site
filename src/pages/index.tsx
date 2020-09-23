import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Features, Header, Steps, Buttons } from "../components";
import "./style.scss";

function IndexPage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Сборка Create HTML Boilerplate для верстки от Webtime.Studio"
    >
      <Header>
        <Buttons left={'button--border-white header__button'} right={'button--background-white header__button'} />
      </Header>
      <main>
        <Features />
        <Steps />
      </main>
    </Layout>
  );
}

export default IndexPage;
