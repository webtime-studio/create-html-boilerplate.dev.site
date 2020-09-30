import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./buttons.scss";

interface ButtonsProps {
  left: string;
  right: string;
}

const Buttons: React.FC<ButtonsProps> = ({ left, right }) => (
  <>
    <Link
      className={`button ${left}`}
      to={useBaseUrl("docs/")}
    >
      Документация
    </Link>
    <a
      className={`button ${right}`}
      href="https://github.com/webtime-studio/create-html-boilerplate"
      target="_blank"
      rel="noopener
      noreferrer"
    >
      Начать
    </a>
  </>
);

export default Buttons;
