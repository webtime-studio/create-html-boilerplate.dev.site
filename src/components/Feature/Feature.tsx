import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./feature.module.scss";

interface FeatureProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description }) => {
  const imgUrl: string = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
