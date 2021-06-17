---
title: "Доступные скрипты"
sidebar_label: "Доступные скрипты"
slug: /available-scripts
---

В каталоге проекта вы можете запустить эти скрипты:

## `npm start / yarn start`

Запускает приложение в режиме разработки. Теперь его можно открыть в браузере [http://localhost:9001](http://localhost:9001). После изменений страница автоматически перезагрузится. Если что-то пошло не так – проверьте консоль на ошибки.

## `npm test / yarn test`

Запускает проверку [CSS стилей](/docs/available-scripts#npm-stylelint--yarn-stylelint) и [JS скриптов](/available-scripts#npm-eslint--yarn-eslint)
на соответствие правилам в проекте.

## `npm run build / yarn build`

Запускает сборку и оптимизацию для максимальной производительности, сохраняет результат в папку `build`. Ваше приложение готово к размещению на хостинге!

## `npm run stylelint / yarn stylelint`

Запускает проверку CSS в соответствии с правилами из `.stylelintrc.js`

## `npm run eslint / yarn eslint`

Запускает проверку JS в соответствии с правилами из `.eslintrc.js`

## `npm run prettier / yarn prettier`

Форматирует файлы проекта в соответствии с правилами из `.prettierrc`
