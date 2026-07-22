# MkDocs

MkDocs — генератор статических сайтов для создания проектной документации. Исходные файлы пишутся в формате Markdown, а настройки управляются через единый YAML-конфигурационный файл `mkdocs.yml`.

Для этого проекта используется наиболее популярная тема MkDocs — **Material for MkDocs**.

## Создание и базовая настройка проекта

### Установка MkDocs и темы Material

Для установки используется пакетный менеджер Python installs Packages (pip), который поставляется вместе с Python.

1. Откройте командную строку и выполните команду для установки MkDocs:
```
pip install mkdocs
```
2. Выполните команду для установки темы Material:
```
pip install mkdocs-material
```

### Создание проекта

1. Выберите папку на устройстве для создания локального репозитория проекта.
2. Создайте локальный репозиторий, открыв терминал в выбранной папке и выполнив команду:
```
git init
```
В результате в папке появится каталог `.git` — база данных локального репозитория.
3. Создайте новый проект MkDocs, выполнив команду:
```
mkdocs new .
```
После выполнения команды в директории появятся базовые элементы проекта:
    * `mkdocs.yml` — файл конфигурации;
    * `docs/` — папка для исходных файлов;
    * `docs/index.md` — главная страница документации.

### Структура проекта

Стандартная структура проекта:

```
pet-project
├─ .git
├─ docs
│ └─ index.md
└─ mkdocs.yml
```

#### Папка `docs`

В папке `docs` хранятся исходные файлы статей проекта в формате Markdown.

По умолчанию в папке уже находится файл `index.md`. При генерации сайта он станет главной страницей.

**Добавление новых статей**

Статьи можно добавлять в корень папки `docs`. Они будут опубликованы как страницы первого уровня:

<style>
  .row-pre { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-pre .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-pre .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-pre { flex-direction: column !important; } .row-pre .left, .row-pre .right { flex: none; width: 100%; margin-bottom: 10px; } .row-pre .right { margin-bottom: 0; } }
</style>

<!-- Ряд 1: Добавление новых статей -->
<div class="row-pre">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>docs
├─ index.md
├─ page-1.md
└─ page-2.md</code></pre>
  </div>
  <div class="right">
    <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
      <li>url-проекта/</li>
      <li>url-проекта/page-1/</li>
      <li>url-проекта/page-2/</li>
    </ul>
  </div>
</div>

**Создание подразделов**

Для создания подразделов добавьте в папку `docs` вложенную папку. Статьи внутри неё станут страницами второго уровня:

<!-- Ряд 2: Добавление вложенных папок -->
<div class="row-pre">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>docs
├─ index.md
└─ subfolder
    ├─ page-1.md
    └─ page-2.md</code></pre>
  </div>
  <div class="right">
    <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
      <li>url-проекта/</li>
      <li>url-проекта/subfolder/page-1/</li>
      <li>url-проекта/subfolder/page-2/</li>
    </ul>
  </div>
</div>

**Создание корневых страниц подразделов**

Чтобы у подраздела появилась корневая (разводящая) страница, добавьте в подпапку файл `index.md`:

<!-- Ряд 3: Добавление корневых статей подразделов -->
<div class="row-pre">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>docs
├─ index.md
└─ subfolder
    ├─ index.md
    ├─ page-1.md
    └─ page-2.md</code></pre>
  </div>
  <div class="right">
    <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
      <li>url-проекта/</li>
      <li>url-проекта/subfolder/</li>
      <li>url-проекта/subfolder/page-1/</li>
      <li>url-проекта/subfolder/page-2/</li>
    </ul>
  </div>
</div>

**Создание многоуровневой структуры**

Папки можно вкладывать друг в друга, создавая документацию с несколькими уровнями вложенности::

<!-- Ряд 4: Добавление в подпапки новых папок -->
<div class="row-pre">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>docs
├─ index.md
└─ subfolder
    ├─ index.md
    ├─ page-1.md
    └─ subsubfolder
        ├─ index.md
        └─ page-2.md</code></pre>
  </div>
  <div class="right">
    <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
      <li>url-проекта/</li>
      <li>url-проекта/subfolder/</li>
      <li>url-проекта/subfolder/page-1/</li>
      <li>url-проекта/subfolder/subsubfolder/</li>
      <li>url-проекта/subfolder/subfolder/page-2/</li>
    </ul>
  </div>
</div>

**Изображения**

Изображения, используемые в статьях проекта, рекомендуется хранить в отдельной папке `images` внутри `docs`:

```
docs
├─ index.md
└─ images
    └─ picture.png
```

!!! note "Примечание"
    MkDocs не требует обязательного использования папки `images`. Достаточно, чтобы все изображения находились внутри папки `docs`. Папка `images` — один из возможных вариантов удобной организации изображений в проекте.

#### Файл `mkdocs.yml`

Файл `mkdocs.yml` — это конфигурационный файл, определяющий основные параметры проекта. Он создаётся в формате `YAML`, предназначенном для структурированной записи информации в виде пар `ключ: значение`.

По умолчанию в конфиге прописан один параметр:

```go title="mkdocs.yml"
site_name: My Docs
```

Для полноценной настройки проекта добавьте в конфиг другие параметры:

**1. Основные параметры сайта и темы**
```go title="mkdocs.yml"
site_name: Портфолио Бельской Юлии # Название сайта
site_description: Профессиональное портфолио # Описание сайта, добавляется в meta-теги
theme: # Тема сайта, информация о ее параметрах
  name: material # Название темы
  logo: images/logo.svg # Ссылка на логотип сайта, логотип добавляется в папку `docs/images`
  font:
    text: Roboto # Шрифт текста
    code: Roboto Mono # Шрифт для текста кода
  language: ru # Язык
  palette: # Настройки светлой и тёмной тем
    # Настройки светлой темы
    - scheme: default
      toggle:
        icon: material/weather-sunny # Иконка для активации светлой темы
        name: Выключить солнышко # Всплывающий текст-подсказка
      primary: blue # Основной цвет
      accent: purple # Акцентный цвет
      # вы можете использовать любой цвет из списка:
      # red; pink; purple; deep purple; indigo; blue; light blue; cyan; teal;
      # green; light green; lime; yellow; amber; orange; deep orange; brown;
      # grey; blue grey; black; white

    # Настройки тёмной темы
    - scheme: slate
      toggle:
        icon: material/weather-night
        name: Позвать солнышко
      primary: deep purple
      accent: blue

  features: # Дополнительные возможности темы
    - navigation.sections # Добавление разделов верхнего уровня в боковом меню, отключение спойлеров в боковом меню
    - navigation.path # Хлебные крошки
    - navigation.indexes # Позволяет создавать корневые страницы разделов меню. Корневая страница должна лежать в папке раздела и называться index.md. Пример использования корневых страниц приведен ниже в настройках nav
    - navigation.tabs # Верхнее меню
    - navigation.tabs.sticky # Фиксация верхнего меню
    - navigation.expand # Разворачивает спойлеры в левом меню по умолчанию
    - toc.integrate # Фиксирует оглавление страницы в левом меню
    - navigation.instant # Функция быстрой загрузки страниц
    - navigation.top # Добавляет кнопку «к началу» для быстрой обратной прокрутки страницы
    - search.suggest # Подсказки при вводе поискового запроса
    - search.highlight # Подсветка результатов поиска в тексте страницы
    - content.code.copy # Кнопка копирования в блоке кода
```
**2. Настройка навигации**

В секции `nav` задается структура сайта. Здесь необходимо указать все статьи с учётом их вложенности:
```go title="mkdocs.yml"
nav: # Структура сайта
- Главная страница: index.md
- Инструменты:
  - Markdown: tools/markdown.md
  - MkDocs: tools/mkdocs.md
  - Git: tools/git.md
  - PlantUML: tools/plantuml.md
- Инструкции:
  - Смена аватарки в Telegram: instructions/page1.md
- Примеры документации:
  - Сценарий «Редактирование заметки»: examples/page2.md
  - API Specification Swagger: api/swagger-api.md
  - API Specification Redoc: api/redoc-api.md
```
**3. Расширения Markdown**

В секции `markdown_extensions` подключаются дополнительные возможности синтаксиса:

```go title="mkdocs.yml"
markdown_extensions: # Расширения markdown
  - admonition # Поддержка информационных панелей (сообщений типа «Внимание», «Совет», «Примечание», etc.)
  - footnotes # Поддержка встроенных сносок на страницах
  - attr_list # Использование html-атрибутов и CSS в элементах markdown
  - md_in_html # Поддержка markdown внутри html
  - def_list # Поддержка списков определений
  - pymdownx.tabbed: # Использование вкладок (табов)
      alternate_style: true
  - pymdownx.details # Использование спойлеров (катов)
  - pymdownx.highlight: # Подсветка синтаксиса в блоках кода
      anchor_linenums: true
  - pymdownx.superfences # Поддержка вложенных блоков кода
  - pymdownx.emoji: # Иконки и эмодзи
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
```
**4. Плагины**

В секции `plugins` подключаются модульные плагины для расширения функциональности:

```go title="mkdocs.yml"
plugins:
  - search # Плагин для подключения поиска по сайту
```
!!! note "Примечание"
    Плагины необходимо предварительно установить через Python installs Packages (pip).

### Локальная сборка проекта

Для предварительного просмотра сайта используется локальная сборка с встроенным сервером MkDocs.

В терминале выполните команду:

```
mkdocs serve
```

Локальная версия сайта становится доступна по адресу `http://127.0.0.1:8000/`.

При внесении изменений в проект локальная сборка автоматически обновляется.

### Создание удалённого репозитория

После настройки проекта создайте удалённый репозиторий на GitHub и свяжите его с локальным.

1. Сохраните изменения в локальном репозитории:
```
git add .
git commit -m "Создание проекта"
```
2. Создайте удалённый репозиторий на GitHub:

    1. Нажмите на иконку профиля в правом верхнем углу, выберите пункт меню «Repositories» и нажмите кнопку **New**.
    2. В поле «Repository name» введите название репозитория. Можно использовать латиницу, маленькие буквы, дефис, нижнее подчёркивание и цифры, например, `pet-project`.
    3. Нажмите кнопку **Create repository**.

3. Скопируйте ссылку на репозиторий из поля «Quick setup → HTTPS».
4. Проверьте статус локального репозитория:
```
git status
```
В ответе должно быть сообщение `On branch master nothing to commit, working tree clean`.
5. Свяжите локальный и удаленный репозитории, выполнив команду:
```
git remote add origin url-репозитория
```
6. Опубликуйте локальную ветку `master`, выполнив команду:
```
git push -u origin master
```
7. Вернитесь в удалённый репозиторий на GitHub и убедитесь, что ветка `master` с файлами проекта появилась.

## Установка плагинов

Плагины MkDocs — это дополнительные модули, расширяющие функциональность стандартного MkDocs.

Плагины MkDocs делятся на два типа:

* [**Встроенные плагины**](#h3#_7) уже включены в состав MkDocs и не требуют установки;

* [**Внешние плагины**](#h3#_8) разработаны сторонними авторами и требуют установки через pip.

### Встроенные плагины

Встроенные плагины доступны сразу после установки MkDocs. Достаточно подключить их в конфигурационном файле проекта `mkdocs.yml`.

#### Search

Search — встроенный плагин для поиска по сайту. Он добавляет в шапку окно поиска, индексирует содержимое статьй и генерирует JSON-файл с данными для поиска. Файлй загружается в кэш браузера пользователя. Весь процесс поиска происходит локально, без обращения к серверу.

Для подключения активируйте плагин в `mkdocs.yml`:

```go title="mkdocs.yml"
plugins:
  - search
```

Документацию плагина можно посмотреть [здесь](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-search/).

#### Tags

Tags — встроенный плагин для создания системы тегов. Теги позволяют категоризировать статьи и группировать их по общим признакам.

Для подключения активируйте плагин в `mkdocs.yml`:

```go title="mkdocs.yml"
plugins:
  - search
  - tags
```

Документацию плагина можно посмотреть [здесь](https://squidfunk.github.io/mkdocs-material/setup/setting-up-tags/).

**Настройка тегов**

1. Определите категории для статей и составьте список тегов.
2. Добавьте список тегов в `mkdocs.yml`:
```go title="mkdocs.yml"
plugins:
  - search
  - tags:
      tags_allowed:
      - tag1
      - tag2
      - tag3
```
3. Добавьте теги на страницы. Вставьте разметку в начало страницы (над заголовком первого уровня):
```
---
tags:
  - tag1
---
# Заголовок статьи
```

!!! note "Примечание"
    Статью можно отметить несколькими тегами:
    ```
    ---
    tags:
      - tag1
      - tag2
      - tag3
    ---
    # Заголовок статьи
    ```

**Создание теговых страниц**

Плагин автоматически создаёт списки статей, сгруппированных по тегам.

Для добавления списка **всех** тегов и статей на страницу, используйте разметку:

<style>
  .code-frame {
    border: 2px solid #800020;
    border-radius: 5px;
    padding: 15px;
    background-color: #f8f9fa;
    font-family: monospace;
    color: #5c5b5b;
    margin-bottom: 10px;
    overflow-x: auto;
  }
</style>

<div class="code-frame">
  &lt;!-- material/tags --&gt;
</div>

Пример теговой страницы можно посмотреть [здесь](/tags/).

Для добавления списка **определённых** тегов на страницу, используйте разметку:

<div class="code-frame">
  &lt;!-- material/tags { include: [tag1, tag2] } --&gt;
</div>

#### Offline

Offline — встроенный плагин для создания документации, работающей без интернета. Позволяет пользователям открывать сайт локально, без доступа к сети.

Для подключения активируйте плагин в `mkdocs.yml`:

```go title="mkdocs.yml"
plugins:
  - search
  - tags
  - offline
```

Документацию плагина можно посмотреть [здесь](https://squidfunk.github.io/mkdocs-material/setup/building-for-offline-usage/).

#### Privacy

Privacy — встроенный плагин, который автоматически скачивает внешние ресурсы (шрифты, стили, скрипты, картинки) и подключает их локально. Вместо ссылок на сторонние серверы в коде сайта появляются ссылки на собственные файлы.

Для подключения активируйте плагин в `mkdocs.yml`:

```go title="mkdocs.yml"
plugins:
  - search
  - tags
  - offline
  - privacy
```

!!! note "Примечание"
    Плагин встроен в Material for MkDocs (начиная с версии 9.5.0) и не требует установки.

### Внешние плагины

Внешние плагины требуют предварительной установки через Python installs Packages (pip). Затем они активируются в конфигурационном файле `mkdocs.yml`.

#### GLightbox

GLightbox – внешний плагин для создания масштабируемой галереи изображений из картинок, добавленных в статью.

1. Установите GLightbox с помощью pip:
```
pip install mkdocs-glightbox
```
2. Активируйте плагин в `mkdocs.yml`:

```go title="mkdocs.yml"
plugins:
  - search
  - glightbox
```

Документацию плагина можно посмотреть [здесь](https://github.com/blueswen/mkdocs-glightbox).

#### PUML

PUML – внешний плагин для встраивания диаграмм PlantUML в документацию. Диаграммы описываются текстом прямо в Markdown-файлах, а при сборке проекта заменяются на готовые SVG-изображения.

1\. Установите плагин с помощью pip:

```
pip install mkdocs_puml
```

2\. Подключите плагин в `mkdocs.yml`:

```go title="mkdocs.yml"
plugins:
  - search
  - plantuml:
      puml_url: https://www.plantuml.com/plantuml/
```

3\. Добавьте в Markdown-файл код PlantUML-диаграммы, в блоке кода диаграммы укажите `puml`:

<pre><code>
&#96;&#96;&#96;puml
@startuml
@enduml
&#96;&#96;&#96;</code></pre>

При сборке проекта диаграмма заменяется на готовое SVG-изображение.

Документацию плагина можно посмотреть [здесь](https://github.com/mikhailkravets/mkdocs_puml).

## Публикация MkDocs

Для публикации этого проекта используется GitHub Pages — бесплатный хостинг статических сайтов от GitHub. Развёртывание выполняется через встроенную команду MkDocs, которая использует скрипт [ghp-import](https://github.com/c-w/ghp-import).

### Ручная публикация

1. Откройте командную строку (консоль или терминал в VS Code) в рабочей директории проекта.

2. Переключитесь на ветку `master` и обновите её с помощью команд:
```
git switch master
git pull
```
3. Выполните сборку и публикацию с помощью команды:
```
mkdocs gh-deploy
```

После успешной публикации в терминале появится ссылка на сайт:

```
INFO    -  Your documentation should shortly be available at: https://yulyashabel5-tech.github.io/pet-project/
```

!!! warning "Важно!"
    Команда `mkdocs gh-deploy` оставляет после себя папку `site` в рабочей директории. Не забудьте удалить её после сборки и публикации сайта.

Чтобы убедиться, что сайт публикуется корректно:

1. Откройте репозиторий на GitHub и перейдите во вкладку «Settings».

2. В левом меню выберите пункт «Pages».

3. Проверьте параметры:

    * Sourse — `Deploy from a branch`.

    * Branch — `gh-pages; folder — /(root)`.

Это значит, что сайт опубликован из ветки `gh-pages`.

### Автоматическая публикация

Автоматическую публикацию документации можно настроить с помощью GitHub Actions.

GitHub Actions — сервис автоматизации задач в GitHub, который позволяет настраивать процессы CI/CD (непрерывной интеграции и доставки) прямо в репозитории.

Процессы автоматизации в GitHub Actions описываются с помощью Workflow.

Workflow — это автоматизированный процесс, который запускается при определённых событиях в репозитории (например, при пуше в ветку `master`). Workflow представляет собой YAML-файл, в котором описана последовательность шагов, которые нужно выполнить.

Для автоматической сборки и публикации проекта необходимо создать такой workflow и настроить события, которые будут его запускать.

1. Откройте рабочую директорию проекта в VS Code.

2. Отколите новую ветку от ветки `master`.

3. Создайте папку `.github/workflows/` в корне проекта.

4. В папке `workflows` создайте файл `ci.yml`.

6. Откройте файл `ci.yml` и добавьте в него текст:
```go title="ci.yml"
name: ci
on:
  push:
    branches:
      - master
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - uses: actions/cache@v4
        with:
          key: ${{ github.ref }}
          path: .cache
      - run: pip install mkdocs-material
      - run: mkdocs gh-deploy --force
```
7. Сохраните файл, создайте коммит и отправьте изменения на GitHub:
```
git add .github/workflows/ci.yml
git commit -m "Добавлен workflow для автоматической публикации"
git push
```

8. Откройте удалённый репозиторий в GitHub, создайте Pull Request и влейте изменения в ветку `master`.

9. Перейдите в раздел «Actions» → «All workflow». В списке появится новый workflow. После успешного завершения процесса (все галочки станут зелёными) сайт обновится.

В данном workflow указан триггер для запуска `push` в ветку `master`. Теперь при каждом пуше в ветку `master` будет автоматически запускаться сборка и публикацияпроекта.

!!! warning "Важно!"
    Если в проекте используются внешние плагины, необходимо добавить их установку в шаги workflow:

    ```go title="ci.yml"
    name: ci
    on:
      push:
        branches:
          - master
    permissions:
      contents: write
    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-python@v5
            with:
              python-version: 3.x
          - uses: actions/cache@v4
            with:
              key: ${{ github.ref }}
              path: .cache
          - run: pip install mkdocs-material
          - run: pip install mkdocs-glightbox # шаг для установки плагина mkdocs-glightbox
          - run: mkdocs gh-deploy --force
    ```      

## Кастомизация стилей

Для изменения оформления сайта используется файл со стилями `extra.css`. Он подключается  в `mkdocs.yml` и переопределяет стандартные стили темы MkDocs Material.

!!! info "Справка"
    CSS (Cascading Style Sheets) — язык стилей, который определяет внешний вид веб-страниц. CSS описывает, как элементы HTML должны отображаться на экране.

### Подключение файла стилей

1. Откройте рабочую директорию проекта.

2. В папке `docs` создайте папку `stylesheets`, а в ней файл `extra.css`.
```
docs/
└── stylesheets/
    └── extra.css
```

3. Подключите файл `extra.css` в `mkdocs.yml`:
```go title="mkdocs.yml"
extra_css:
  - stylesheets/extra.css
```

### Настройка цветовой схемы

В файле `extra.css` переопределяются CSS-переменные для стандартных светлой (`default`) и тёмной (`slate`) цветовых схем:

```go title="extra.css"
/* Настройки светлой схемы */

[data-md-color-scheme="default"] {
  --md-primary-fg-color: #0B61A4; /*Основной цвет*/
  --md-accent-fg-color: #1565C0; /*Акцентный цвет*/
  --md-typeset-a-color: #0e70e0; /*Цвет ссылок*/
  --md-default-bg-color: #f0f8ff; /*Фоновый цвет*/
  --md-default-fg-color: #353535; /*Основной цвет текста (абзацы, списки, подзаголовки, nav и toc)*/
  --md-code-bg-color: #ffffff; /*Цвет фона блока кода*/
  --md-code-fg-color: #5c5b5b; /*Цвет текста в блоке кода*/
  --md-default-fg-color--light: #4e4d4d; /*Цвет h1 и заголовков блоков toc и nav*/
}

/* Настройки тёмной схемы */

[data-md-color-scheme="slate"] {
  --md-primary-fg-color: #0B61A4; /*Основной цвет*/
  --md-accent-fg-color: #1565C0; /*Акцентный цвет*/
  --md-typeset-a-color: #0e70e0; /*Цвет ссылок*/
  --md-default-bg-color: #f0f8ff; /*Фоновый цвет*/
  --md-default-fg-color: #353535; /*Основной цвет текста (абзацы, списки, подзаголовки, nav и toc)*/
  --md-code-bg-color: #ffffff; /*Цвет фона блока кода*/
  --md-code-fg-color: #5c5b5b; /*Цвет текста в блоке кода*/
  --md-default-fg-color--light: #4e4d4d; /*Цвет h1 и заголовков блоков toc и nav*/
}
```

#### Создание пользовательской схемы

1. Создайте новую цветовую схему в `extra.css`:
```go title="extra.css"
/* Настройки светлой темы */

[data-md-color-scheme="my-scheme"] {
  --md-primary-fg-color: #0B61A4; /*Основной цвет*/
  --md-accent-fg-color: #1565C0; /*Акцентный цвет*/
  --md-typeset-a-color: #0e70e0; /*Цвет ссылок*/
  --md-default-bg-color: #f0f8ff; /*Фоновый цвет*/
  --md-default-fg-color: #353535; /*Основной цвет текста (абзацы, списки, подзаголовки, nav и toc)*/
  --md-code-bg-color: #ffffff; /*Цвет фона блока кода*/
  --md-code-fg-color: #5c5b5b; /*Цвет текста в блоке кода*/
  --md-default-fg-color--light: #4e4d4d; /*Цвет h1 и заголовков блоков toc и nav*/
  --md-footer-bg-color: #25567B; /*Цвет футера*/
}
```
2. Подключите созданную цветовую схему вместо стандартных в `mkdocs.yml`:
```go title="mkdocs.yml"
theme:
…
  palette: # Настройки тем
    - scheme: my-scheme
```

!!! warning "Важно!"
    При подключении пользовательской светлой схемы стандартную `default` неободимо отключить. Если оставить обе схемы, переключение между ними будет работать некорректно, так как MkDocs не различает «основную» и «ночную» схемы. Отключение выполняется с помощью комментария `#`:
    ```go title="mkdocs.yml"
    theme:
    …
      palette: # Настройки тем
        - scheme: my-scheme
          toggle:
            icon: material/weather-sunny # Иконка для активации светлой темы
            name: Выключить солнышко # Всплывающий текст-подсказка
        # Настройки светлой темы
    #    - scheme: default 
    #      toggle:
    #        icon: material/weather-sunny # Иконка для активации светлой темы
    #        name: Выключить солнышко # Всплывающий текст-подсказка
    #      primary: custom # Основной цвет
    #      accent: blue # Акцентный цвет
        # Настройки тёмной темы
        - scheme: slate
          toggle:
            icon: material/weather-night
            name: Позвать солнышко
          primary: custom
          accent: blue
    ```
    Если в проекте нужна одна цветовая схема, в `mkdocs.yml` оставьте настройки только одной цветовой схемы.

!!! note "Примечание"
    Для изменения цвета выберите нужную переменную в `extra.css` и введите hex-код цвета (например, #0B61A4) или выберите нужный цвет в палитре.

    Для подбора сочетающихся цветов можно воспользоваться [цветовым кругом](https://colorscheme.ru/).

#### Совместимость с плагином PUML

Плагин [mkdocs_puml](#h4#puml) по умолчанию генерирует две версии диаграммы: для светлой схемы `default` и для тёмной темы `slate`. Это работает корректно, пока используются стандартные имена схем.

Проблемы возникают, если стандартная схема заменяется пользовательской (например, my-scheme) или в проекте используется только одна цветовая схема. В обоих случаях плагин продолжает генерировать две версии, что может привести к некорректному отображению.

При использовании двух схем (`default` и `slate`) достаточно оставить стандартные имена и изменять их параметры через `extra.css`.

```go title="mkdocs.yml"
- plantuml:
    puml_url: https://www.plantuml.com/plantuml/
    theme:
      enabled: false
```

При `enabled: false` генерируется только одна версия диаграммы для текущей цветовой схемы.

### Настройка шрифтов

В файле `extra.css ` переопределяются параметры шрифтов для различных элементов сайта. Доступны три варианта настройки:

* [**Общие настройки**](#h4#_16) применяются ко всему тексту, например, к статьям и навигации.

* [**Настройка параметров отдельных элементов**](#h4#_17) применяется к конкретным элементам, например, к заголовкам разных уровней.

* [**Комбинированные настройки**](#h4#_18) совмещают общие настройки с настройками элементов.

#### Общие настройки параметров

В `extra.css ` можно переопределять параметры текста: шрифт, начертание, цвет, размер:

```go title="extra.css"
/*Параметры текста статей*/
.md-typeset {
    font-family: 'Tahoma', 'arial';
    font-weight: 200;
    font-size: 16px;
    color: #4b5563;
}
/*Параметры текста nav и toc*/
.md-nav {
    font-family: 'Tahoma', 'arial';
    font-weight: 400;
    font-size: 16px;
    color: #4b5563;
}
```

#### Настройка параметров отдельных элементов

В `extra.css ` можно настроить параметры отдельных элементов текста, например, заголовков:

```go title="extra.css"
.md-content h1, .md-content h2, .md-content h3, .md-content h4 {
    font-family: 'Roboto Mono';
    font-weight: 600;
    color: #4b5563;
}
```

#### Комбинированные настройки

В `extra.css ` можно сочетать разные настройки:

```go title="extra.css"
.md-typeset {
    font-family: 'Tahoma', 'arial';
    font-weight: 200;
    font-size: 16px;
    color: #4b5563;
}

.md-content h1, .md-content h2, .md-content h3, .md-content h4 {
    font-family: 'Roboto Mono';
    font-weight: 600;
    color: #4b5563;
}

.md-content h1 {
    font-size: 30px;
}

.md-content h2 {
    font-size: 24px;
}

.md-content h3 {
    font-size: 21px;
}

.md-content h4 {
    font-size: 18px;
}
```

!!! warning "Важно!"
    Настройки отдельных элементов текста (например, `.md-content h1`) имеют приоритет над общими настройками (`.md-typeset`).

## Единый источник

Единый источник — это технология, позволяющая переиспользовать один и тот же контент из общего источника в разных статьях документации.

Повторяющийся контент хранится в одном ресурсном файле и подтягивается на нужные страницы. При обновлении такого контента изменения вносятся только в ресурсный файл. Все страницы, где он используется, обновляются автоматически.

Для переиспользования контента в MkDocs Material используется расширение `pymdownx.snippets`.

### Подключение расширения

Расширение `pymdownx.snippets` подключается в `mkdocs.yml`:

```go title="mkdocs.yml"
markdown_extensions: # Расширения markdown
  - pymdownx.snippets
```

### Переиспользование файла целиком

Для добавления на страницу всего содержимого другого файла используйте разметку `--8<-- "путь-до-файла"`:

<div style="padding-left:0px;">
  <pre style="background:#f7ecec; padding:15px; border-radius:5px; font-family:monospace; overflow-x:auto; border:none; margin:0;"><code style="color:#5c5b5b; display:block;">--8&lt;-- "docs/tools/mkdocs.md"</code></pre>
</div>

!!! warning "Важно!"
    Путь в разметке указывается относительно корня проекта.

### Переиспользование фрагмента файла

Для добавления на страницу только определённого фрагмент файла:

1. Выделите фрагмент в исходном файле:
```
# --8<-- [start:название-фрагмента]

Выделенный фрагмент

# --8<-- [end:название-фрагмента]
```
2. Добавьте фрагмент на страницу:

<div style="padding-left:28px;">
  <pre style="background:#f7ecec; padding:15px; border-radius:5px; font-family:monospace; overflow-x:auto; border:none; margin:0;"><code style="color:#5c5b5b; display:block;">--8&lt;-- "путь-до-файла:название-фрагмента"</code></pre>
</div>

### Использование ресурсного файла

Для хранения переиспользуемых фрагментов можно создать отдельный ресурсный файл:

1. Откройте рабочую директорию проекта. 

2. В корне проекта создайте файл source (без расширения).

3. Добавьте в файл фрагменты с разметкой:  
```
# --8<-- [start:название-фрагмента]

Контент для переиспользования

# --8<-- [end:название-фрагмента]
```
4. Добавьте фрагмент на страницу: 

<div style="padding-left:28px;">
  <pre style="background:#f7ecec; padding:15px; border-radius:5px; font-family:monospace; overflow-x:auto; border:none; margin:0;"><code style="color:#5c5b5b; display:block;">--8&lt;-- "source:название-фрагмента"</code></pre>
</div>
