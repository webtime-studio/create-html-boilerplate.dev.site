---
id: 1-how-to-start title: Быстрый старт
sidebar_label: Быстрый старт
slug: /how-to-start
---

Create HTML Boilerplate это отличный инструмент для старта вашего сайта или веб-приложения. Всё что вам нужно для
запуска, это иметь установленный Node.js и выполнить несколько шагов. Для простоты мы будем приводить примеры с
использованием `npm`

### Шаг 1. Клонируем бойлерплейт.

```
git clone git@github.com:webtime-studio/create-html-boilerplate.git myApp
```

### Шаг 2. Устанавливаем зависимости.

```
cd myApp
npm i
```

### Шаг 3. Запускаем проект.

```
npm start
```

Открываем [http://localhost:9001](http://localhost:9001) и всё готово к разработке.

Как только проект будет готов, сделайте сборку с помощью `npm run build`. Все файлы проекта будут готовы к публикации в
продакшн. Да, всё так просто. Вам не нужно устанавливать `webpack` или `Babel`. Всё уже настроено, можно просто
сосредоточиться на проекте.

## Yarn или npm

Вы можете использовать любой менеджер пакетов на свой вкус, сборка будет отлично работать как с `yarn`, так и с `npm`.

## Структура проекта

После инициализации проекта вы получите следующую структуру:

```
myApp
├── .editorconfig
├── .eslintrc.js
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintrc.js
├── .travis.yml
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── webpack.config.js
├── source
│   ├── fonts
│   ├── html
│   │   ├── includes/
│   │   └── views/
│   ├── img
│   ├── js
│   ├── scss
│   │   ├── font-face.scss
│   │   ├── global.scss
│   │   ├── style.scss
│   │   └── variables.scss
│   └── vendors
│       └── normalize-css/
│           └── normalize.min.css
└── .github
    ├── bug_report.md
    └── feature_request.md
```
