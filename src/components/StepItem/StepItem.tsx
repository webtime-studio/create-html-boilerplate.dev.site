import React from "react";
import "./step-item.scss";

interface StepItemProps {
  title: string;
  children: React.ReactNode;
}

const StepItem: React.FC<StepItemProps> = ({ title, children }) => (
  <li className="steps__item">
    <h3 className="steps__item-title">{title}</h3>
    <p>{children}</p>
  </li>
);

export default StepItem;
