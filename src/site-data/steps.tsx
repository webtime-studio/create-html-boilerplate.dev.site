import React from "react";

export interface Step {
  title: string;
  description: React.ReactNode;
}

export const steps: Array<Step> = [
  {
    title: "Шаг 1.",
    description: (
      <>
        Зайдите в <a href="https://github.com/webtime-studio" className="steps__github-link" target="_blank"
          rel="noopener noreferrer"> наш репозиторий на <span lang="en">GitHub</span></a> и нажмите на кнопку &quot;<span lang="en">Use this template</span>&quot;.
      </>
    ),
  },
  {
    title: "Шаг 2.",
    description: (
      <>
        Склонируйте новый репозиторий к себе на компьютер и начинайте работу.
      </>
    ),
  },
  {
    title: "Шаг 3.",
    description: (
      <>
      Не хотите создавать свой проект на <span lang="en">GitHub</span>?<br />
      Тогда вы можете просто скачать архив сборки с нашего сайта:
      </>
    ),
  },
];
