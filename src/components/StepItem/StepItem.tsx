import Buttons from "../Buttons";
import React from "react";
import { steps } from "../../site-data/steps";
import "./step-item.scss";

interface StepItemProps {
  title: string;
  description: React.ReactNode;
}

const StepItem: React.FC<StepItemProps> = ({ title, description }) => (
    <li className="steps__item">
      <h3 className="steps__item-title">{title}</h3>
      <p>{description}</p>
    </li>
  );

export default StepItem;
