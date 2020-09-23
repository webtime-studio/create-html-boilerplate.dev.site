import React from "react";
import { features } from "../../site-data/features";
import "./feature-item.scss";

interface FeatureItemProps {
  title: string;
  description: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
    <li className="features__item">
      <h3 className="features__item-title">{title}</h3>
      <p className="features__item-description">{description}</p>
    </li>
  );

export default FeatureItem;
