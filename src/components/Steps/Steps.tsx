import React from "react";
import StepItem from "../StepItem"
import Buttons from "../Buttons";
import { steps } from "../../site-data/steps";
import "./steps.scss";

const Steps: React.FC = () => (
        <section className="steps">
          <div className="container steps__content-wrapper">
            <h2 className="steps__title">3 простых шага и все готово!</h2>

            <div className="steps__description">
              <ul className="steps__list">
                {steps.map((props, idx) => (
                  <StepItem key={idx} {...props} />
                ))}
              </ul>
              <div className="steps__image-wrapper">
                <img src="/img/gif/html-app-boilerplate.gif" className="steps__image" alt="Как пользоваться сборкой на ГитХабе" />
              </div>
            </div>

            <p className="steps__text">Не хотите создавать свой проект на <span lang="en">GitHub</span>?<br />
              Тогда вы можете просто скачать архив сборки с нашего сайта:</p>
            <a className="steps__download-link" href="#" download>
              <span className="steps__download-text">Скачать последний релиз</span>
            </a>

            <div className="steps__buttons">
              <Buttons left={'button--border-orange steps__button'} right={'button--background-orange steps__button'} />
            </div>

          </div>
        </section>
)

export default Steps;
