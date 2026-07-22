// Сворачиваемое оглавление (TOC)
(function () {
  "use strict";

  function initCollapsibleToc() {
    // Ищем оглавление (на десктопе справа, на мобилках в левом меню)
    var toc = document.querySelector(".md-sidebar--secondary .md-nav--secondary") ||
              document.querySelector(".md-sidebar--primary .md-nav--secondary") ||
              document.querySelector(".md-nav--secondary");

    if (!toc) return;

    // Ищем ВСЕ элементы списка, у которых есть вложенный nav
    toc.querySelectorAll("li.md-nav__item").forEach(function (li) {
      // Проверяем, есть ли у этого элемента дочерний nav (вложенные подзаголовки)
      var nestedNav = li.querySelector(":scope > nav.md-nav");
      if (!nestedNav) return;

      li.classList.add("md-nav__item--nested");

      // Добавляем класс для сворачивания
      li.classList.add("toc-collapsed");

      // Добавляем кнопку-переключатель, если её ещё нет
      var link = li.querySelector(":scope > a.md-nav__link");
      if (!link) return;

      if (!link.querySelector(".toc-toggle")) {
        var toggle = document.createElement("span");
        toggle.className = "toc-toggle";
        toggle.setAttribute("role", "button");
        toggle.setAttribute("aria-label", "Развернуть/свернуть раздел");
        link.appendChild(toggle);

        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          li.classList.toggle("toc-collapsed");
        });
      }
    });
  }

  // Запускаем скрипт с повторными попытками, чтобы дождаться загрузки TOC
  function runWithRetry(attempts) {
    attempts = attempts || 0;
    initCollapsibleToc();
    if (attempts < 5) {
      setTimeout(function () {
        runWithRetry(attempts + 1);
      }, 300);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      runWithRetry(0);
    });
  } else {
    runWithRetry(0);
  }

  // Перезапускаем при смене страницы (для navigation.instant)
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      setTimeout(function () {
        runWithRetry(0);
      }, 200);
    });
  }
})();