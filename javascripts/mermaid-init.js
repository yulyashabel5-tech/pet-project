// Инициализация Mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'base'
});

// Перезапуск Mermaid после загрузки нового контента в Material
document$.subscribe(function() {
  // Проверяем, есть ли на странице диаграммы
  var diagrams = document.querySelectorAll('.mermaid');
  if (diagrams.length) {
    // Небольшая задержка для полной загрузки контейнера
    setTimeout(function() {
      mermaid.run({
        querySelector: '.mermaid'
      });
    }, 300);
  }
});