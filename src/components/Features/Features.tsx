import React from "react";
import FeatureItem from "../FeatureItem"
import { features, Feature } from "../../site-data/features";
import "./features.scss";

const Features: React.FC = () => (
  <section className="features">
    <h2 className="features__title visually-hidden">Преимущества нашей сборки</h2>
      <ul className="features__list">
      {features.map((
        feature: Feature,
        index: number) => {
        const { title, description } = feature;
        return (
          <FeatureItem key={index} title={title}>
            {description}
          </FeatureItem>
          )
        })
      }
      </ul>
  </section>
)

export default Features;
