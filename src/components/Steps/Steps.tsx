import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import StepItem from "../StepItem";
import Buttons from "../Buttons";
import {steps, Step} from "../../site-data/steps";
import "./steps.scss";

const Steps: React.FC = () => (
  <section className="steps">
    <div className="steps__content-wrapper">
      <h2 className="steps__title">3 простых шага и все готово!</h2>

      <div className="steps__description">
        <ul className="steps__list">
          {steps.map((
            step: Step,
            index: number,
          ) => {
            const {title, description} = step;
            return (
              <StepItem key={index} title={title}>
                {description}
              </StepItem>
            );
          })}
        </ul>
        <div className="steps__image-wrapper">
          <img
            className="steps__image"
            src={useBaseUrl('img/gif/html-app-boilerplate.gif')}
            alt="Как пользоваться сборкой на ГитХабе"/>
        </div>
      </div>

      <p className="steps__text">Не хотите создавать свой проект на <span lang="en">GitHub</span>?<br/>
        Тогда вы можете просто скачать архив сборки с нашего сайта:
      </p>
      <a className="steps__download-link"
         href="https://github.com/webtime-studio/create-html-boilerplate/releases" target="_blank"
         rel="noopener noreferrer">
        <span className="steps__download-text">Скачать последний релиз</span>
      </a>
      <div className="steps__buttons">
        <Buttons left="button--border-orange steps__button" right="button--background-orange steps__button"/>
      </div>
    </div>
  </section>
);

export default Steps;
