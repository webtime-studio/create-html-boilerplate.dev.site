import React from "react";
import "./feature-item.scss";

interface FeatureItemProps {
  title: string;
  children: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, children }) => (
  <li className="features__item">
    <h3 className="features__item-title">{title}</h3>
    <p className="features__item-description">{children}</p>
  </li>
);

export default FeatureItem;
