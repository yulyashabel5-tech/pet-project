---
tags:
  - git
  - help
  - manual
---

# Git

Git — распределённая система контроля версий. Git хранит все версии файлов, отслеживает изменения и позволяет управлять ими.

## Архитектура Git

Есть один главный (удалённый) репозиторий на сервере и локальные копии у каждого участника. Участники работают в своей копии, периодически синхронизируя её с удалённым репозиторием: забирают обновления или отправляют свои изменения.

<svg xmlns="http://w3.org" viewBox="0 0 740 380" style="margin: 0 auto; display: block; max-width: 740px; width: 100%; height: 100%"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4}.rect-center{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2.5;rx:14px;ry:14px}.rect-dev{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2;rx:12px;ry:12px}.user-icon{fill:var(--md-accent-fg-color)}.txt-title{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:16px;font-weight:bold;text-anchor:middle}.txt-desc{fill:var(--md-default-fg-color);font-family:'Roboto Mono',monospace;font-size:12px;text-anchor:middle}.arrow-sync-primary{stroke:var(--md-primary-fg-color);stroke-width:2;stroke-dasharray:4 4;fill:none}.arrow-head-primary{fill:var(--md-primary-fg-color)}.arrow-sync-accent{stroke:var(--md-accent-fg-color);stroke-width:2;stroke-dasharray:4 4;fill:none}.arrow-head-accent{fill:var(--md-accent-fg-color)}.lbl-sync-primary{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:900;text-anchor:middle}.lbl-sync-accent{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:900;text-anchor:middle}</style><marker id="arr-center-accent" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-head-accent"/></marker><marker id="arr-center-primary" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-head-primary"/></marker></defs><g id="git-sync-topology-colored-large-icons"><rect x="15" y="15" width="710" height="350" class="bg-box"/><rect x="270" y="40" width="200" height="75" class="rect-center"/><text x="370" y="73" class="txt-title">Remote Repo</text><text x="370" y="95" class="txt-desc">Удалённый репозиторий</text><g id="dev1"><rect x="40" y="240" width="170" height="65" class="rect-dev"/><path d="M 52 260 A 6 6 0 0 1 64 260 A 6 6 0 0 1 52 260 Z M 46 280 C 46 272 52 269 58 269 C 64 269 70 272 70 280 Z" class="user-icon"/><text x="82" y="268" text-anchor="start" style="fill:var(--md-accent-fg-color); font-family:'Roboto Mono',monospace; font-size:14px; font-weight:bold">Участник 1</text><text x="82" y="288" text-anchor="start" style="fill:var(--md-default-fg-color); font-family:'Roboto Mono',monospace; font-size:12px">Локальная копия</text></g><g id="dev2"><rect x="285" y="240" width="170" height="65" class="rect-dev"/><path d="M 297 260 A 6 6 0 0 1 309 260 A 6 6 0 0 1 297 260 Z M 291 280 C 291 272 297 269 303 269 C 309 269 315 272 315 280 Z" class="user-icon"/><text x="327" y="268" text-anchor="start" style="fill:var(--md-accent-fg-color); font-family:'Roboto Mono',monospace; font-size:14px; font-weight:bold">Участник 2</text><text x="327" y="288" text-anchor="start" style="fill:var(--md-default-fg-color); font-family:'Roboto Mono',monospace; font-size:12px">Локальная копия</text></g><g id="dev3"><rect x="530" y="240" width="170" height="65" class="rect-dev"/><path d="M 542 260 A 6 6 0 0 1 554 260 A 6 6 0 0 1 542 260 Z M 536 280 C 536 272 542 269 548 269 C 554 269 560 272 560 280 Z" class="user-icon"/><text x="572" y="268" text-anchor="start" style="fill:var(--md-accent-fg-color); font-family:'Roboto Mono',monospace; font-size:14px; font-weight:bold">Участник 3</text><text x="572" y="288" text-anchor="start" style="fill:var(--md-default-fg-color); font-family:'Roboto Mono',monospace; font-size:12px">Локальная копия</text></g><path d="M 170 240 L 290 115" class="arrow-sync-primary"/><polygon points="170,240 180,237 175,228" class="arrow-head-primary"/><text x="215" y="160" class="lbl-sync-primary" transform="rotate(-43 215 160)">изменения</text><path d="M 270 105 L 140 240" class="arrow-sync-accent"/><polygon points="270,105 260,108 265,117" class="arrow-head-accent"/><text x="220" y="185" class="lbl-sync-accent" transform="rotate(-43 220 185)">обновления</text><path d="M 345 235 L 345 122" class="arrow-sync-primary" marker-end="url(#arr-center-primary)"/><text x="310" y="175" class="lbl-sync-primary" text-anchor="end">изменения</text><path d="M 395 122 L 395 235" class="arrow-sync-accent" marker-end="url(#arr-center-accent)"/><text x="410" y="175" class="lbl-sync-accent" text-anchor="start">обновления</text><path d="M 450 115 L 570 240" class="arrow-sync-accent"/><polygon points="450,115 460,118 455,127" class="arrow-head-accent"/><text x="525" y="160" class="lbl-sync-accent" transform="rotate(43 525 160)">обновления</text><path d="M 600 240 L 470 105" class="arrow-sync-primary"/><polygon points="600,240 590,237 595,228" class="arrow-head-primary"/><text x="520" y="185" class="lbl-sync-primary" transform="rotate(43 520 185)">изменения</text></g></svg>

Благодаря этому большинство операций выполняется локально и не требует сети. Такая архитектура обеспечивает высокую производительность системы и надёжность данных.

### Веб-сервисы для хранения репозиториев

Для хранения удалённых Git-репозиториев и управления ими используются специальные веб-сервисы: GitLab, BitBucket, GitVerse, GitHub.

GitHub — один из самых популярных веб-сервисов, особенно для проектов с открытым исходным кодом (open-source). 

!!! info "Информация"
    Исходный код этого сайта хранится в репозитории на **GitHub**. Сборка автоматизирована через встроенный инструмент автоматизации **GitHub Actions**, а готовая версия публикуется на бесплатном хостинге статических сайтов **GitHub Pages**.

## Принципы работы Git

Любая система контроля версий — это набор контрольных точек. Каждая точка хранит информацию о файлах и изменениях, внесённых с момента создания предыдущей контрольной точки.

Git при создании контрольной точки «фотографирует» проект, запоминая, как выглядит каждый файл. Если файл не изменился с прошлого снимка, Git не копирует его заново, а просто ссылается на предыдущую версию. Вся информация в системе хранится именно в виде таких снимков.

Этот снимок называется **коммит** (commit). Коммит создаётся при сохранении изменений.

Между коммитами можно свободно переключаться и просматривать разные версии проекта. Со временем коммитов становится много, и чтобы в них ориентироваться, в Git есть специальные указатели. Они показывают на нужный коммит.

Изначально в проекте только один указатель. Он находится на первом коммите. При создании нового коммита указатель перемещается на него:

<svg xmlns="http://w3.org" viewBox="0 0 740 230" width="100%" height="100%">
  <defs>
    <style>
      .bg-box { fill: none; stroke: var(--md-default-fg-color--light); stroke-width: 1; stroke-dasharray: 4 4; }
      .step-num { fill: var(--md-default-fg-color--light); font-family: 'Roboto Mono', monospace; font-size: 14px; font-weight: bold; }
      .branch-rect { fill: var(--md-code-bg-color); stroke: var(--md-primary-fg-color); stroke-width: 2; }
      .branch-text { fill: var(--md-primary-fg-color); font-family: 'Roboto Mono', monospace; font-size: 20px; font-weight: bold; text-anchor: middle; }
      .commit-rect { fill: var(--md-primary-fg-color); rx: 12px; ry: 12px; }
      .commit-text { fill: #ffffff; font-family: 'Roboto Mono', monospace; font-size: 14px; text-anchor: middle; }
      .arrow-main { stroke: var(--md-primary-fg-color); stroke-width: 2; fill: none; }
      .arrow-main-head { fill: var(--md-primary-fg-color); }
      .arrow-dash { stroke: var(--md-default-fg-color--light); stroke-width: 2; stroke-dasharray: 4 4; fill: none; }
      .arrow-dash-head { fill: var(--md-default-fg-color--light); }
    </style>
    <marker id="arrow-solid" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head" />
    </marker>
    <marker id="arrow-dashed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head" />
    </marker>
  </defs>
  <g id="step-1">
    <rect x="15" y="15" width="220" height="210" class="bg-box" />
    <text x="220" y="213" class="step-num">1</text>
    <rect x="75" y="45" width="100" height="50" class="branch-rect" />
    <text x="125" y="77" class="branch-text">A</text>
    <line x1="125" y1="95" x2="125" y2="137" class="arrow-main" marker-end="url(#arrow-solid)" />
    <rect x="40" y="145" width="170" height="55" class="commit-rect" />
    <text x="125" y="178" class="commit-text">коммит А-1</text>
  </g>
  <g id="step-2" transform="translate(260, 0)">
    <rect x="15" y="15" width="450" height="210" class="bg-box" />
    <text x="450" y="213" class="step-num">2</text>
    <rect x="40" y="145" width="170" height="55" class="commit-rect" />
    <text x="125" y="178" class="commit-text">коммит А-1</text>
    <line x1="210" y1="172.5" x2="242" y2="172.5" class="arrow-dash" marker-end="url(#arrow-dashed)" />
    <rect x="285" y="45" width="100" height="50" class="branch-rect" />
    <text x="335" y="77" class="branch-text">A</text>
    <line x1="335" y1="95" x2="335" y2="137" class="arrow-main" marker-end="url(#arrow-solid)" />
    <rect x="250" y="145" width="170" height="55" class="commit-rect" />
    <text x="335" y="178" class="commit-text">коммит А-2</text>
  </g>
</svg>

Для создания новой версии файла проекта создаётся новый указатель. Теперь оба указателя находятся на последнем коммите:

<svg xmlns="http://w3.org" viewBox="0 0 480 310" style="margin: 0 auto; display: block; max-width: 480px; width: 100%; height: 100%;"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4;}.step-num{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:bold;}.branch-rect{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2;}.branch-text{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle;}.branch-rect-b{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2;}.branch-text-b{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle;}.commit-rect{fill:var(--md-primary-fg-color);rx:12px;ry:12px;}.commit-text{fill:#ffffff;font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle;}.arrow-main{stroke:var(--md-primary-fg-color);stroke-width:2;fill:none;}.arrow-main-head{fill:var(--md-primary-fg-color);}.arrow-main-b{stroke:var(--md-accent-fg-color);stroke-width:2;fill:none;}.arrow-main-head-b{fill:var(--md-accent-fg-color);}.arrow-dash{stroke:var(--md-default-fg-color--light);stroke-width:2;stroke-dasharray:4 4;fill:none;}.arrow-dash-head{fill:var(--md-default-fg-color--light);}</style><marker id="as3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head"/></marker><marker id="as3b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-b"/></marker><marker id="ad3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head"/></marker></defs><g id="step-3"><rect x="15" y="15" width="450" height="280" class="bg-box"/><text x="450" y="283" class="step-num">3</text><rect x="40" y="115" width="170" height="55" class="commit-rect"/><text x="125" y="148" class="commit-text">коммит А-1</text><line x1="210" y1="142.5" x2="242" y2="142.5" class="arrow-dash" marker-end="url(#ad3)"/><rect x="285" y="40" width="100" height="50" class="branch-rect"/><text x="335" y="72" class="branch-text">A</text><line x1="335" y1="90" x2="335" y2="107" class="arrow-main" marker-end="url(#as3)"/><rect x="250" y="115" width="170" height="55" class="commit-rect"/><text x="335" y="148" class="commit-text">коммит А-2</text><line x1="335" y1="215" x2="335" y2="182" class="arrow-main-b" marker-end="url(#as3b)"/><rect x="285" y="215" width="100" height="50" class="branch-rect-b"/><text x="335" y="247" class="branch-text-b">Б</text></g></svg>

После переключения на новый указатель файл редактируется и фиксируется коммитом. Указатель Б переходит на новый коммит, указатель А остаётся на прошлом коммите:

<svg xmlns="http://w3.org" viewBox="0 0 740 370" style="margin: 0 auto; display: block; max-width: 740px; width: 100%; height: 100%"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4;}.step-num{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:bold;}.branch-rect{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2;}.branch-text{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle;}.branch-rect-b{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2;}.branch-text-b{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle;}.commit-rect{fill:var(--md-primary-fg-color);rx:12px;ry:12px;}.commit-text{fill:#ffffff;font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle;}.commit-rect-b{fill:var(--md-accent-fg-color);rx:12px;ry:12px;}.commit-text-b{fill:var(--md-default-bg-color);font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle;}.arrow-main{stroke:var(--md-primary-fg-color);stroke-width:2;fill:none;}.arrow-main-head{fill:var(--md-primary-fg-color);}.arrow-main-b{stroke:var(--md-accent-fg-color);stroke-width:2;fill:none;}.arrow-main-head-b{fill:var(--md-accent-fg-color);}.arrow-dash{stroke:var(--md-default-fg-color--light);stroke-width:2;stroke-dasharray:4 4;fill:none;}.arrow-dash-head{fill:var(--md-default-fg-color--light);}</style><marker id="as4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head"/></marker><marker id="as4b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-b"/></marker><marker id="ad4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head"/></marker></defs><g id="step-4"><rect x="15" y="15" width="710" height="340" class="bg-box"/><text x="710" y="343" class="step-num">4</text><rect x="40" y="115" width="170" height="55" class="commit-rect"/><text x="125" y="148" class="commit-text">коммит А-1</text><line x1="210" y1="142.5" x2="242" y2="142.5" class="arrow-dash" marker-end="url(#ad4)"/><rect x="285" y="40" width="100" height="50" class="branch-rect"/><text x="335" y="72" class="branch-text">A</text><line x1="335" y1="90" x2="335" y2="107" class="arrow-main" marker-end="url(#as4)"/><rect x="250" y="115" width="170" height="55" class="commit-rect"/><text x="335" y="148" class="commit-text">коммит А-2</text><path d="M 420 142.5 L 470 142.5 L 470 217.5 L 492 217.5" class="arrow-dash" marker-end="url(#ad4)"/><rect x="500" y="190" width="170" height="55" class="commit-rect-b"/><text x="585" y="223" class="commit-text-b">коммит Б-1</text><line x1="585" y1="270" x2="585" y2="253" class="arrow-main-b" marker-end="url(#as4b)"/><rect x="535" y="270" width="100" height="50" class="branch-rect-b"/><text x="585" y="302" class="branch-text-b">Б</text></g></svg>

Теперь есть две параллельные версии файла, между которыми можно свободно переключаться. Рассмотрим внесение изменений в версию А. Для этого вернёмся на указатель А, отредактируем файл и создадим новый коммит:

<svg xmlns="http://w3.org" viewBox="0 0 760 340" style="margin: 0 auto; display: block; max-width: 760px; width: 100%; height: 100%"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4}.step-num{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:bold}.branch-rect{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2}.branch-text{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle}.branch-rect-b{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2}.branch-text-b{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle}.commit-rect{fill:var(--md-primary-fg-color);rx:12px;ry:12px}.commit-text{fill:#ffffff;font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.commit-rect-b{fill:var(--md-accent-fg-color);rx:12px;ry:12px}.commit-text-b{fill:var(--md-default-bg-color);font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.arrow-main{stroke:var(--md-primary-fg-color);stroke-width:2;fill:none}.arrow-main-head{fill:var(--md-primary-fg-color)}.arrow-main-b{stroke:var(--md-accent-fg-color);stroke-width:2;fill:none}.arrow-main-head-b{fill:var(--md-accent-fg-color)}.arrow-dash{stroke:var(--md-default-fg-color--light);stroke-width:2;stroke-dasharray:4 4;fill:none}.arrow-dash-head{fill:var(--md-default-fg-color--light)}</style><marker id="as5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head"/></marker><marker id="as5b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-b"/></marker><marker id="ad5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head"/></marker></defs><g id="step-5"><rect x="15" y="15" width="730" height="310" class="bg-box"/><text x="730" y="313" class="step-num">5</text><rect x="40" y="105" width="170" height="55" class="commit-rect"/><text x="125" y="138" class="commit-text">коммит А-1</text><line x1="210" y1="132.5" x2="242" y2="132.5" class="arrow-dash" marker-end="url(#ad5)"/><rect x="250" y="105" width="170" height="55" class="commit-rect"/><text x="335" y="138" class="commit-text">коммит А-2</text><line x1="420" y1="132.5" x2="492" y2="132.5" class="arrow-dash" marker-end="url(#ad5)"/><rect x="535" y="30" width="100" height="50" class="branch-rect"/><text x="585" y="62" class="branch-text">A</text><line x1="585" y1="80" x2="585" y2="97" class="arrow-main" marker-end="url(#as5)"/><rect x="500" y="105" width="170" height="55" class="commit-rect"/><text x="585" y="138" class="commit-text">коммит А-3</text><path d="M 420 132.5 L 450 132.5 L 450 207.5 L 492 207.5" class="arrow-dash" marker-end="url(#ad5)"/><rect x="500" y="180" width="170" height="55" class="commit-rect-b"/><text x="585" y="213" class="commit-text-b">коммит Б-1</text><line x1="585" y1="260" x2="585" y2="243" class="arrow-main-b" marker-end="url(#as5b)"/><rect x="535" y="260" width="100" height="50" class="branch-rect-b"/><text x="585" y="292" class="branch-text-b">Б</text></g></svg>

Указатель А переместился на новый коммит. Таким образом, начали выделяться параллельные цепочки коммитов под двумя разными указателями. Эти цепочки параллельны и независимы друг от друга. 

Например, можно вернуться на указатель Б и создать там ещё два коммита, а потом переключиться на указатель А и добавить один коммит:

<svg xmlns="http://w3.org" viewBox="0 0 1120 380" style="margin: 0 auto; display: block; max-width: 1120px; width: 100%; height: 100%"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4}.step-num{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:18px;font-weight:900}.branch-rect{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2}.branch-text{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle}.branch-rect-b{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2}.branch-text-b{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle}.commit-rect{fill:var(--md-primary-fg-color);rx:12px;ry:12px}.commit-text{fill:#ffffff;font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.commit-rect-b{fill:var(--md-accent-fg-color);rx:12px;ry:12px}.commit-text-b{fill:var(--md-default-bg-color);font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.arrow-main{stroke:var(--md-primary-fg-color);stroke-width:2;fill:none}.arrow-main-head{fill:var(--md-primary-fg-color)}.arrow-main-b{stroke:var(--md-accent-fg-color);stroke-width:2;fill:none}.arrow-main-head-b{fill:var(--md-accent-fg-color)}.arrow-dash{stroke:var(--md-default-fg-color--light);stroke-width:2;stroke-dasharray:4 4;fill:none}.arrow-dash-head{fill:var(--md-default-fg-color--light)}</style><marker id="as6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head"/></marker><marker id="as6b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-b"/></marker><marker id="ad6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head"/></marker></defs><g id="step-6"><rect x="15" y="15" width="1090" height="340" class="bg-box"/><text x="1090" y="343" class="step-num">6</text><rect x="40" y="115" width="170" height="55" class="commit-rect"/><text x="125" y="148" class="commit-text">коммит А-1</text><line x1="210" y1="142.5" x2="242" y2="142.5" class="arrow-dash" marker-end="url(#ad6)"/><rect x="250" y="115" width="170" height="55" class="commit-rect"/><text x="335" y="148" class="commit-text">коммит А-2</text><line x1="420" y1="142.5" x2="452" y2="142.5" class="arrow-dash" marker-end="url(#ad6)"/><rect x="460" y="115" width="170" height="55" class="commit-rect"/><text x="545" y="148" class="commit-text">коммит А-3</text><line x1="630" y1="142.5" x2="662" y2="142.5" class="arrow-dash" marker-end="url(#ad6)"/><rect x="705" y="40" width="100" height="50" class="branch-rect"/><text x="755" y="72" class="branch-text">A</text><line x1="755" y1="90" x2="755" y2="107" class="arrow-main" marker-end="url(#as6)"/><rect x="670" y="115" width="170" height="55" class="commit-rect"/><text x="755" y="148" class="commit-text">коммит А-4</text><path d="M 420 142.5 L 435 142.5 L 435 217.5 L 452 217.5" class="arrow-dash" marker-end="url(#ad6)"/><rect x="460" y="190" width="170" height="55" class="commit-rect-b"/><text x="545" y="223" class="commit-text-b">коммит Б-1</text><line x1="630" y1="217.5" x2="662" y2="217.5" class="arrow-dash" marker-end="url(#ad6)"/><rect x="670" y="190" width="170" height="55" class="commit-rect-b"/><text x="755" y="223" class="commit-text-b">коммит Б-2</text><line x1="840" y1="217.5" x2="872" y2="217.5" class="arrow-dash" marker-end="url(#ad6)"/><rect x="880" y="190" width="170" height="55" class="commit-rect-b"/><text x="965" y="223" class="commit-text-b">коммит Б-3</text><line x1="965" y1="270" x2="965" y2="253" class="arrow-main-b" marker-end="url(#as6b)"/><rect x="915" y="270" width="100" height="50" class="branch-rect-b"/><text x="965" y="302" class="branch-text-b">Б</text></g></svg>

При необходимости можно выбрать любой из имеющихся коммитов, создать от него ещё один указатель и получить третью параллельную цепочку:

<svg xmlns="http://w3.org" viewBox="0 0 940 500" style="margin: 0 auto; display: block; max-width: 940px; width: 100%; height: 100%"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4}.step-num{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:bold}.branch-rect{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2}.branch-text{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle}.branch-rect-b{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2}.branch-text-b{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle}.branch-rect-v{fill:var(--md-code-bg-color);stroke:var(--md-default-fg-color);stroke-width:2}.branch-text-v{fill:var(--md-default-fg-color);font-family:'Roboto Mono',monospace;font-size:20px;font-weight:bold;text-anchor:middle}.commit-rect{fill:var(--md-primary-fg-color);rx:12px;ry:12px}.commit-text{fill:#ffffff;font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.commit-rect-b{fill:var(--md-accent-fg-color);rx:12px;ry:12px}.commit-text-b{fill:var(--md-default-bg-color);font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.commit-rect-v{fill:var(--md-default-fg-color);rx:12px;ry:12px}.commit-text-v{fill:var(--md-default-bg-color);font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.arrow-main{stroke:var(--md-primary-fg-color);stroke-width:2;fill:none}.arrow-main-head{fill:var(--md-primary-fg-color)}.arrow-main-b{stroke:var(--md-accent-fg-color);stroke-width:2;fill:none}.arrow-main-head-b{fill:var(--md-accent-fg-color)}.arrow-main-v{stroke:var(--md-default-fg-color);stroke-width:2;fill:none}.arrow-main-head-v{fill:var(--md-default-fg-color)}.arrow-dash{stroke:var(--md-default-fg-color--light);stroke-width:2;stroke-dasharray:4 4;fill:none}.arrow-dash-head{fill:var(--md-default-fg-color--light)}</style><marker id="as7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head"/></marker><marker id="as7b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-b"/></marker><marker id="as7v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-v"/></marker><marker id="ad7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head"/></marker></defs><g id="step-7"><rect x="15" y="15" width="910" height="470" class="bg-box"/><text x="910" y="473" class="step-num">7</text><rect x="40" y="105" width="135" height="55" class="commit-rect"/><text x="107.5" y="138" class="commit-text">коммит А-1</text><line x1="175" y1="132.5" x2="195" y2="132.5" class="arrow-dash" marker-end="url(#ad7)"/><rect x="200" y="105" width="135" height="55" class="commit-rect"/><text x="267.5" y="138" class="commit-text">коммит А-2</text><path d="M 335 142.5 L 350 142.5 L 350 217.5 L 360 217.5" class="arrow-dash" marker-end="url(#ad7)"/><line x1="335" y1="142.5" x2="360" y2="142.5" class="arrow-dash" marker-end="url(#ad7)"/><rect x="365" y="105" width="135" height="55" class="commit-rect"/><text x="432.5" y="138" class="commit-text">коммит А-3</text><line x1="500" y1="132.5" x2="525" y2="132.5" class="arrow-dash" marker-end="url(#ad7)"/><rect x="547.5" y="40" width="100" height="50" class="branch-rect"/><text x="597.5" y="72" class="branch-text">A</text><line x1="597.5" y1="90" x2="597.5" y2="105" class="arrow-main" marker-end="url(#as7)"/><rect x="530" y="105" width="135" height="55" class="commit-rect"/><text x="597.5" y="138" class="commit-text">коммит А-4</text><rect x="365" y="180" width="135" height="55" class="commit-rect-b"/><text x="432.5" y="213" class="commit-text-b">коммит Б-1</text><line x1="500" y1="207.5" x2="525" y2="207.5" class="arrow-dash" marker-end="url(#ad7)"/><rect x="530" y="180" width="135" height="55" class="commit-rect-b"/><text x="597.5" y="213" class="commit-text-b">коммит Б-2</text><line x1="665" y1="207.5" x2="695" y2="207.5" class="arrow-dash" marker-end="url(#ad7)"/><rect x="695" y="180" width="135" height="55" class="commit-rect-b"/><text x="762.5" y="213" class="commit-text-b">коммит Б-3</text><line x1="762.5" y1="260" x2="762.5" y2="235" class="arrow-main-b" marker-end="url(#as7b)"/><rect x="712.5" y="260" width="100" height="50" class="branch-rect-b"/><text x="762.5" y="292" class="branch-text-b">Б</text><path d="M 500 207.5 L 512 207.5 L 512 352.5 L 525 352.5" class="arrow-dash" marker-end="url(#ad7)"/><rect x="530" y="325" width="135" height="55" class="commit-rect-v"/><text x="597.5" y="358" class="commit-text-v">коммит В-1</text><line x1="665" y1="352.5" x2="695" y2="352.5" class="arrow-dash" marker-end="url(#ad7)"/><rect x="695" y="325" width="135" height="55" class="commit-rect-v"/><text x="762.5" y="358" class="commit-text-v">коммит В-2</text><line x1="762.5" y1="405" x2="762.5" y2="390" class="arrow-main-v" marker-end="url(#as7v)"/><rect x="712.5" y="405" width="100" height="50" class="branch-rect-v"/><text x="762.5" y="437" class="branch-text-v">В</text></g></svg>

Каждый новый указатель ответвляется от выбранного коммита и ведёт за собой новую цепочку коммитов. Такие указатели, а также цепочки коммитов, которые тянутся за ними, называются **ветками** (branch).

В каждом проекте по умолчанию существует одна главная ветка (`master` или `main`). Главная ветка содержит стабильную версию проекта – чистовик. Изменения не вносятся напрямую в чистовик. Для этого создаётся новая ветка-черновика. Это позволяет сохранять основную версию в целостности до завершения работы.

<svg xmlns="http://w3.org" viewBox="0 0 740 370" style="margin: 0 auto; display: block; max-width: 740px; width: 100%; height: 100%"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4;}.step-num{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:bold;}.branch-rect{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2;}.branch-text{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:18px;font-weight:bold;text-anchor:middle;}.branch-rect-b{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2;}.branch-text-b{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:16px;font-weight:bold;text-anchor:middle;}.commit-rect{fill:var(--md-primary-fg-color);rx:12px;ry:12px;}.commit-text{fill:#ffffff;font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle;}.commit-rect-b{fill:var(--md-accent-fg-color);rx:12px;ry:12px;}.commit-text-b{fill:var(--md-default-bg-color);font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle;}.arrow-main{stroke:var(--md-primary-fg-color);stroke-width:2;fill:none;}.arrow-main-head{fill:var(--md-primary-fg-color);}.arrow-main-b{stroke:var(--md-accent-fg-color);stroke-width:2;fill:none;}.arrow-main-head-b{fill:var(--md-accent-fg-color);}.arrow-dash{stroke:var(--md-default-fg-color--light);stroke-width:2;stroke-dasharray:4 4;fill:none;}.arrow-dash-head{fill:var(--md-default-fg-color--light);}</style><marker id="as8" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head"/></marker><marker id="as8b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-b"/></marker><marker id="ad8" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head"/></marker></defs><g id="step-8"><rect x="15" y="15" width="710" height="340" class="bg-box"/><text x="710" y="343" class="step-num">8</text><rect x="40" y="115" width="170" height="55" class="commit-rect"/><text x="125" y="148" class="commit-text">коммит А-1</text><line x1="210" y1="142.5" x2="242" y2="142.5" class="arrow-dash" marker-end="url(#ad8)"/><rect x="285" y="40" width="100" height="50" class="branch-rect"/><text x="335" y="72" class="branch-text">master</text><line x1="335" y1="90" x2="335" y2="107" class="arrow-main" marker-end="url(#as8)"/><rect x="250" y="115" width="170" height="55" class="commit-rect"/><text x="335" y="148" class="commit-text">коммит А-2</text><path d="M 420 142.5 L 470 142.5 L 470 217.5 L 492 217.5" class="arrow-dash" marker-end="url(#ad8)"/><rect x="500" y="190" width="170" height="55" class="commit-rect-b"/><text x="585" y="223" class="commit-text-b">коммит Б-1</text><line x1="585" y1="270" x2="585" y2="253" class="arrow-main-b" marker-end="url(#as8b)"/><rect x="505" y="270" width="160" height="50" class="branch-rect-b"/><text x="585" y="302" class="branch-text-b">feature-branch</text></g></svg>

После завершения работы над черновиком изменения вносятся в чистовик — новая ветка вливается обратно в главную ветку. Этот процесс в Git называется **слиянием** (merge):

<svg xmlns="http://w3.org" viewBox="0 0 1140 370" style="margin: 0 auto; display: block; max-width: 1140px; width: 100%; height: 100%"><defs><style>.bg-box{fill:none;stroke:var(--md-default-fg-color--light);stroke-width:1;stroke-dasharray:4 4}.step-num{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:bold}.branch-rect{fill:var(--md-code-bg-color);stroke:var(--md-primary-fg-color);stroke-width:2}.branch-text{fill:var(--md-primary-fg-color);font-family:'Roboto Mono',monospace;font-size:18px;font-weight:bold;text-anchor:middle}.branch-rect-b{fill:var(--md-code-bg-color);stroke:var(--md-accent-fg-color);stroke-width:2}.branch-text-b{fill:var(--md-accent-fg-color);font-family:'Roboto Mono',monospace;font-size:14px;font-weight:bold;text-anchor:middle}.commit-rect{fill:var(--md-primary-fg-color);rx:12px;ry:12px}.commit-text{fill:#ffffff;font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.commit-rect-b{fill:var(--md-accent-fg-color);rx:12px;ry:12px}.commit-text-b{fill:var(--md-default-bg-color);font-family:'Roboto Mono',monospace;font-size:14px;text-anchor:middle}.arrow-main{stroke:var(--md-primary-fg-color);stroke-width:2;fill:none}.arrow-main-head{fill:var(--md-primary-fg-color)}.arrow-main-b{stroke:var(--md-accent-fg-color);stroke-width:2;fill:none}.arrow-main-head-b{fill:var(--md-accent-fg-color)}.arrow-dash{stroke:var(--md-default-fg-color--light);stroke-width:2;stroke-dasharray:4 4;fill:none}.arrow-dash-head{fill:var(--md-default-fg-color--light)}.merge-label{fill:var(--md-default-fg-color--light);font-family:'Roboto Mono',monospace;font-size:12px;font-weight:bold}</style><marker id="as9" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head"/></marker><marker id="as9b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-main-head-b"/></marker><marker id="ad9" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 7 5 L 0 8.5 z" class="arrow-dash-head"/></marker></defs><g id="step-9"><rect x="15" y="15" width="1110" height="340" class="bg-box"/><text x="1110" y="343" class="step-num">9</text><rect x="40" y="115" width="135" height="55" class="commit-rect"/><text x="107.5" y="148" class="commit-text">коммит А-1</text><line x1="175" y1="142.5" x2="195" y2="142.5" class="arrow-dash" marker-end="url(#ad9)"/><rect x="200" y="115" width="135" height="55" class="commit-rect"/><text x="267.5" y="148" class="commit-text">коммит А-2</text><path d="M 335 142.5 L 350 142.5 L 350 217.5 L 360 217.5" class="arrow-dash" marker-end="url(#ad9)"/><line x1="335" y1="142.5" x2="360" y2="142.5" class="arrow-dash" marker-end="url(#ad9)"/><rect x="365" y="115" width="135" height="55" class="commit-rect"/><text x="432.5" y="148" class="commit-text">коммит А-3</text><line x1="500" y1="142.5" x2="525" y2="142.5" class="arrow-dash" marker-end="url(#ad9)"/><rect x="530" y="115" width="135" height="55" class="commit-rect"/><text x="597.5" y="148" class="commit-text">коммит А-4</text><text x="795" y="133" class="merge-label" text-anchor="middle">merge</text><line x1="665" y1="142.5" x2="925" y2="142.5" class="arrow-dash" marker-end="url(#ad9)"/><rect x="955" y="40" width="100" height="50" class="branch-rect"/><text x="1005" y="72" class="branch-text">master</text><line x1="1005" y1="90" x2="1005" y2="112" class="arrow-main" marker-end="url(#as9)"/><rect x="930" y="115" width="135" height="55" class="commit-rect"/><text x="997.5" y="148" class="commit-text">коммит А-5</text><rect x="365" y="190" width="135" height="55" class="commit-rect-b"/><text x="432.5" y="223" class="commit-text-b">коммит Б-1</text><line x1="500" y1="217.5" x2="525" y2="217.5" class="arrow-dash" marker-end="url(#ad9)"/><rect x="530" y="190" width="135" height="55" class="commit-rect-b"/><text x="597.5" y="223" class="commit-text-b">коммит Б-2</text><line x1="665" y1="217.5" x2="695" y2="217.5" class="arrow-dash" marker-end="url(#ad9)"/><rect x="695" y="190" width="135" height="55" class="commit-rect-b"/><text x="762.5" y="223" class="commit-text-b">коммит Б-3</text><line x1="762.5" y1="270" x2="762.5" y2="253" class="arrow-main-b" marker-end="url(#as9b)"/><rect x="692.5" y="270" width="140" height="50" class="branch-rect-b"/><text x="762.5" y="302" class="branch-text-b">feature-branch</text><text x="875" y="175" class="merge-label" transform="rotate(-33 875 175)" text-anchor="middle">merge</text><path d="M 830 217.5 L 925 147.5" class="arrow-dash" marker-end="url(#ad9)"/></g></svg>

В проекте можно создавать неограниченное количество веток, переключаться между ними, объединять, переносить коммиты и выполнять другие операции. Это позволяет организовать командную работу и выполнять несколько задач параллельно.

Управление файлами в Git осуществляется через терминал с помощью специальных команд.

## Основные команды Git

| Команда | Назначение |
|---------|------------|
| `git clone` | Клонирует удалённый репозиторий на локальный компьютер |
| `git status` | Показывает текущее состояние репозитория (изменённые файлы, ветку) |
| `git add` | Добавляет изменения в индекс (staging area) для подготовки к коммиту |
| `git commit` | Создаёт коммит из проиндексированных изменений |
| `git push` | Отправляет локальные коммиты в удалённый репозиторий |
| `git pull` | Загружает изменения из удалённого репозитория и сливает с текущей веткой |
| `git fetch` | Загружает изменения из удалённого репозитория без слияния (просмотр) |
| `git branch` | Показывает список веток или создаёт новую ветку |
| `git switch` / `git checkout` | Переключается между ветками |
| `git merge` | Сливает изменения из одной ветки в другую |
| `git log` | Показывает историю коммитов |
| `git diff` | Показывает различия между файлами или коммитами |
| `git restore` | Отменяет изменения в файлах (рабочая директория или индекс) |
| `git reset` | Отменяет локальный коммит |
| `git revert` | Отменяет опубликованный коммит (создаёт новый коммит отмены) |

### Клонирование репозитория 

Клонирование репозитория — это создание локальной копии репозитория на устройстве пользователя для дальнейшей работы с файлами репозитория.

1. Откройте удалённый репозиторий в GitHub.
2. На вкладке «Code» нажмите кнопку **Code**.
3. В выпадающем окне перейдите на **Local** → **HTML** и скопируйте ссылку на репозиторий.
4. Выберите на вашем устройстве папку, в которую вы хотите поместить локальный репозиторий.
5. Откройте командную строку в этой папке и выполните команду для клонирования репозитория:
```
git clone ссылка-на-репозиторий-из-пункта-3
```

!!! quote "Как открыть нужную папку в командной строке?"
    Для перехода в нужную папку через командную строку используйте команду `cd путь-до-папки`:
    ```
    cd C:\Users\User-1\folder-for-repo
    ```

### Настройка параметров конфигурации 

Установите имя пользователя и электронный адрес с помощью команды `git config --global`:

```go title="Пример"
git config --global user.email yulyashabel5@gmail.com
git config --global user.name "Yuliya.Belskaya"
```

Этими данными по умолчанию будут подписываться все сделанные коммиты.

Можно задать отдельные имя пользователя и электронную почту для определённого репозитория. Для этого перейдите в локальный репозиторий и выполните команды `git config` без флага `--global`:

```
git config user.email new-address@mail.com
git config user.name "Name"
```

### Просмотр текущего состояния репозитория

Команда `git status` показывает текущую ветку и состояние файлов: какие изменения не добавлены в индекс, а какие уже готовы к коммиту.

Проиндексированные файлы отображаются под заголовком `Changes to be committed`:

```go title="Пример"
git status
On branch git
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   docs/tools/git.md
```

Непроиндексированные файлы отображаются под заголовком `Changes not staged for commit`:

```go title="Пример"
git status
On branch git
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   docs/tools/git.md

no changes added to commit (use "git add" and/or "git commit -a")
```

### Обновление локального репозитория

Для работы с изменениями из удалённого репозитория используются команды `git fetch` и `git pull`.

Команда `git fetch` загружает изменения из удалённого репозитория, но не вливает их в локальные ветки. Файлы и состояние локального репозитория остаются без изменений. Команду `git fetch` можно использовать для безопасного просмотра обновлений удалённого репозитория, например, чтобы посмотреть новые ветки и проанализировать работу коллег.

Команда `git pull` загружает изменения из удалённого репозитория и сразу вливает их в локальные ветки, синхронизируя локальный репозиторий с удалённым. Команда `git pull` используется, когда необходимо получить актуальную версию проекта.

### Переключение между ветками

Для переключения на другую ветку используйте команду:

```
git switch название-ветки 
```

!!! note "Примечание"
    Команда `git checkout название-ветки` также работает, но считается устаревшей. Вместо неё рекомендуется использовать `git switch название-ветки`.

### Создание новой ветки

Как правило новая ветка создаётся для выполнения очередной задачи по обновлению проекта, поэтому ветка откалывается от главной ветки репозитория (main или master):

1. Переключитесь на главную ветку репозитория:
```
git switch master
```
2. Заберите возможные обновления из удалённого репозитория:
```
git pull
```
3. Создайте новую ветку. По умолчанию ветка откалывается от текущей ветки (в нашем случае от master-ветки):
```
git branch new-feature
```
4. Переключитесь на новую ветку:
```
git switch new-feature
```

### Сохранение изменений

Внесённые вами в файлы изменения находятся в рабочей директории. Перед созданием коммита необходимо добавить эти изменения в индекс — промежуточное пространство с метаданными об изменениях:

1. Убедитесь, что изменения есть в рабочей директории:
```
git status
```
Непроиндексированные файлы отображаются под заголовком `Changes not staged for commit`:
```go title="Пример"
git status
On branch git
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   docs/tools/git.md

no changes added to commit (use "git add" and/or "git commit -a")
```
2. Добавьте изменения в индекс. Для этого выполните команду `git add`:
!!! note "Примечание"
    Чтобы добавить один файл в индекс, укажите в команде git add полное название файла:
    ```
    git add tools/git.md
    ```
    Чтобы добавить в индекс все изменённые файлы, вместо названия файла в команде `git add` поставьте точку:
    ```
    git add .
    ```
После `git add .` команда `git status` покажет проиндексированные изменения под заголовком `Changes to be commited`:
```go title="Пример"
git add .
git status
On branch git
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   docs/tools/git.md     
``` 
3. Создайте коммит с помощью команды `git commit -m "Описание коммита"`:
```go title="Пример"
git commit -m "Добавил статью с git-командами"
```

### Публикация новой ветки

Чтобы локальная ветка `git` стала доступна другим участникам проекта в удалённом репозитории, её необходимо опубликовать — создать удалённую версию и связать их.

Для этого используйте команду `git push` с флагом `--set-upstream`:

```
git push --set-upstream origin git
```

После публикации в удалённом репозитории `origin` создаётся ветка `origin/git`, связанная с локальной веткой `git`. Теперь можно выполнять команды `git pull` и `git push` в ветке `git` — Git будет знать, из какой удалённой ветки забирать изменения при `git pull` и в какую удалённую ветку их отправлять при `git push`.

### Отправка изменений на сервер

Для отправки коммитов опубликованной ветки в удалённый репозиторий используйте команду `git push`.

### Слияние веток

Для слияния двух веток используйте команду `git merge`:

1. Переключитесь на целевую ветку (целевая — ветка, в которую будут вливаться изменения):
```go title="Пример"
git switch base-branch
```
2. Выполните команду `git merge название-сливаемой-ветки`:
```go title="Пример"
git merge compared-branch
```
3. Отправьте изменения целевой ветки в удалённый репозиторий с помощью команды `git push`.

### Просмотр истории изменений

Для просмотра истории коммитов выполните команду `git log`. В ответе отобразится список коммитов:

```go title="Пример"
git log
commit a1449fc4f004c7f65ff81b1513b6553c4071b96c (HEAD -> git)
Author: yulyashabel5-tech <yulyashabel5@gmail.com>
Date:   Wed Jul 8 19:28:51 2026 +0300

    Добавила описание команд Git
```

Для просмотра следующих пунктов списка нажмите клавишу **Enter**. Для выхода из команды `git log` нажмите клавишу **q**.

Для просмотра полной информации о конкретном коммите используйте команду `git show` с указанием хэша коммита:

```go title="Пример"
git show a1449fc4f004c7f65ff81b1513b6553c4071b96c 
Author: yulyashabel5-tech <yulyashabel5@gmail.com>
Date:   Wed Jul 8 19:28:51 2026 +0300

    Добавила описание команд Git

diff --git a/docs/tools/git.md b/docs/tools/git.md
```

??? quote "Что такое хэш коммита?"
    Хэш коммита — это его уникальный идентификатор, состоящий из сорока символов (или его укороченная версия из семи символов). Хэш коммита можно посмотреть в выводе команды `git log`:
    ```go title="Пример"
    git log
    commit a1449fc4f004c7f65ff81b1513b6553c4071b96c (HEAD -> git)
    Author: yulyashabel5-tech <yulyashabel5@gmail.com>
    Date:   Wed Jul 8 19:28:51 2026 +0300
    ```

Для просмотра последних изменений используйте команду `git diff`. Команда покажет разницу между текущим состоянием рабочей директории и последним коммитом:

```go title="Пример"
git diff
diff --git a/docs/tools/git.md b/docs/tools/git.md
index 0f38fc6..c17fa51 100644
--- a/docs/tools/git.md
+++ b/docs/tools/git.md
@@ -193,6 +193,132 @@

     git status
     ```

-    Непроиндексированные файлы выделены красным цветом:
+    Непроиндексированные файлы указаны под заголовком `Changes not staged for commit`:
```

### Отмена изменений

Для отмены непроиндексированных изменений в файле используйте команду `git restore название-файла`. Изменения в файле будут безвозвратно удалены.

Для отмены проиндексированных изменений в файле используйте команду `git restore --staged название-файла`. Изменения в файле сохранятся, но будут удалены из индекса.

Для отмены локального коммита (который ещё не отправили в удалённый репозиторий) используйте команду `git reset`:

```
git reset HEAD~1
```

В результате выполнения этой команды указатель HEAD переместится на предыдущий коммит, а изменения из текущего коммита окажутся в рабочей директории.

!!! info "Важно!"
    Не используйте команду `git reset` для коммитов, которые вы уже отправили на удалённый сервер.

Для отмены коммита, отправленного в удалённый репозиторий, используйте команду `git revert хэш-коммита`.

!!! note "Примечание"
    Команда `git revert` не удаляет коммит, а отменяет внесённые в нём изменения и фиксирует это новым коммитом.

### Просмотр веток

Для просмотра всех веток локального репозитория используйте команду `git branch`.

Для просмотра всех веток удалённого репозитория используйте команду `git branch с флагом -r`:

```
git branch -r
```

### Удаление веток

=== "Локальная ветка"

    Для удаления локальной ветки:

    1. Переключитесь на другую ветку.
    2. Выполните команду:
    ```
    git branch --delete название-ветки
    ```
    !!! info "Внимание!"
        Команда `git branch --delete` удаляет только локальную версию ветки и не влияет на опубликованную в удалённом репозитории ветку, которую нужно удалить отдельно.

=== "Удалённая ветка"

    Для удаления удалённой ветки выполните команду:
        
    ```
    git push origin --delete название-ветки
    ```
