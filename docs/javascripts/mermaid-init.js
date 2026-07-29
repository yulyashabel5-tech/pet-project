// Инициализация Mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'base'
});

// Перезапуск Mermaid после загрузки нового контента в Material
document$.subscribe(function() {
  mermaid.run({
    querySelector: '.mermaid'
  });
});