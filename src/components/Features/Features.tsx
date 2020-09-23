import React from "react";
import FeatureItem from "../FeatureItem"
import { features } from "../../site-data/features";
import "./features.scss";

const Features: React.FC = () => (
  <section className="features">
    <h2 className="features__title visually-hidden">Преимущества нашей сборки</h2>
      <ul className="features__list">
        {features.map((props, idx) => (
          <FeatureItem key={idx} {...props} />
        ))}
      </ul>
  </section>
)

export default Features;
