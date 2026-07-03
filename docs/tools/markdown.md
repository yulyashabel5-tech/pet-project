# Markdown

Markdown (маркдаун) — это облегчённый язык разметки для форматирования текстов.

В маркдаун вместо сложных инструментов форматирования применяются обычные символы: звёздочки, решётки, дефисы и другие знаки. Их комбинации позволяют задавать структуру документа и выделять смысловые фрагменты.

Текст, размеченный с помощью маркдауна, легко читать в исходном виде и править в любом редакторе. При необходимости он легко преобразуется в другие форматы, например, в `HTML` или `PDF`.

## Синтаксис

Синтаксис маркдауна делится на базовый и расширенный. 

**Базовый синтаксис** содержит минималный набор элементов: заголовки, абзацы, списки, цитаты, ссылки и способы выделения текста. Он описан в спецификации CommonMark. Спецификация CommonMark была разработана для единообразного отображения текста на разных платформах.

**Расширенный синтаксис** предоставляет дополнительные возможности, отсутствующие в базовом: таблицы, сноски, чек-листы, подсветку кода и другие элементы. Эти элементы реализованы не везде — их поддержка зависит от конкретного редактора, конвертера или платформы.

Таким образом, базовый синтаксис обеспечивает универсальность, а расширенный даёт гибкость для решения специфических задач.

<style>
  /* === БАЗОВЫЙ СИНТАКСИС === */
  .row-h1 { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-h1 .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-h1 .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-h1 { flex-direction: column !important; } .row-h1 .left, .row-h1 .right { flex: none; width: 100%; margin-bottom: 10px; } .row-h1 .right { margin-bottom: 0; } }

  .row-h2 { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-h2 .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-h2 .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-h2 { flex-direction: column !important; } .row-h2 .left, .row-h2 .right { flex: none; width: 100%; margin-bottom: 10px; } .row-h2 .right { margin-bottom: 0; } }

  .row-h3 { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-h3 .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-h3 .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-h3 { flex-direction: column !important; } .row-h3 .left, .row-h3 .right { flex: none; width: 100%; margin-bottom: 10px; } .row-h3 .right { margin-bottom: 0; } }

  .row-p { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-p .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-p .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-p { flex-direction: column !important; } .row-p .left, .row-p .right { flex: none; width: 100%; margin-bottom: 10px; } .row-p .right { margin-bottom: 0; } }

  .row-ol { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-ol .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-ol .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-ol { flex-direction: column !important; } .row-ol .left, .row-ol .right { flex: none; width: 100%; margin-bottom: 10px; } .row-ol .right { margin-bottom: 0; } }

  .row-ul { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-ul .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-ul .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-ul { flex-direction: column !important; } .row-ul .left, .row-ul .right { flex: none; width: 100%; margin-bottom: 10px; } .row-ul .right { margin-bottom: 0; } }

  .row-blockquote { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-blockquote .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-blockquote .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-blockquote { flex-direction: column !important; } .row-blockquote .left, .row-blockquote .right { flex: none; width: 100%; margin-bottom: 10px; } .row-blockquote .right { margin-bottom: 0; } }

  .row-em { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-em .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-em .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-em { flex-direction: column !important; } .row-em .left, .row-em .right { flex: none; width: 100%; margin-bottom: 10px; } .row-em .right { margin-bottom: 0; } }

  .row-strong { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-strong .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-strong .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-strong { flex-direction: column !important; } .row-strong .left, .row-strong .right { flex: none; width: 100%; margin-bottom: 10px; } .row-strong .right { margin-bottom: 0; } }

  .row-code { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-code .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-code .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-code { flex-direction: column !important; } .row-code .left, .row-code .right { flex: none; width: 100%; margin-bottom: 10px; } .row-code .right { margin-bottom: 0; } }

  .row-pre { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-pre .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-pre .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-pre { flex-direction: column !important; } .row-pre .left, .row-pre .right { flex: none; width: 100%; margin-bottom: 10px; } .row-pre .right { margin-bottom: 0; } }

  .row-hr { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-hr .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-hr .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-hr { flex-direction: column !important; } .row-hr .left, .row-hr .right { flex: none; width: 100%; margin-bottom: 10px; } .row-hr .right { margin-bottom: 0; } }

  .row-link { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-link .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-link .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-link { flex-direction: column !important; } .row-link .left, .row-link .right { flex: none; width: 100%; margin-bottom: 10px; } .row-link .right { margin-bottom: 0; } }

  .row-img { display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px; }
  .row-img .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-img .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-img { flex-direction: column !important; } .row-img .left, .row-img .right { flex: none; width: 100%; margin-bottom: 10px; } .row-img .right { margin-bottom: 0; } }

  /* === РАСШИРЕННЫЙ СИНТАКСИС === */
  .row-note { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-note .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-note .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-note { flex-direction: column !important; } .row-note .left, .row-note .right { flex: none; width: 100%; margin-bottom: 10px; } .row-note .right { margin-bottom: 0; } }

  .row-info { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-info .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-info .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-info { flex-direction: column !important; } .row-info .left, .row-info .right { flex: none; width: 100%; margin-bottom: 10px; } .row-info .right { margin-bottom: 0; } }

  .row-quote { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-quote .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-quote .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-quote { flex-direction: column !important; } .row-quote .left, .row-quote .right { flex: none; width: 100%; margin-bottom: 10px; } .row-quote .right { margin-bottom: 0; } }

  .row-warning { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-warning .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-warning .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-warning { flex-direction: column !important; } .row-warning .left, .row-warning .right { flex: none; width: 100%; margin-bottom: 10px; } .row-warning .right { margin-bottom: 0; } }

  .row-details-closed { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-details-closed .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-details-closed .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-details-closed { flex-direction: column !important; } .row-details-closed .left, .row-details-closed .right { flex: none; width: 100%; margin-bottom: 10px; } .row-details-closed .right { margin-bottom: 0; } }

  .row-details-open { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-details-open .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-details-open .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-details-open { flex-direction: column !important; } .row-details-open .left, .row-details-open .right { flex: none; width: 100%; margin-bottom: 10px; } .row-details-open .right { margin-bottom: 0; } }

  .row-tabs { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-tabs .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-tabs .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #ffffff; }
  @media (max-width: 768px) { .row-tabs { flex-direction: column !important; } .row-tabs .left, .row-tabs .right { flex: none; width: 100%; margin-bottom: 10px; } .row-tabs .right { margin-bottom: 0; } }

  .row-del { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-del .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-del .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-del { flex-direction: column !important; } .row-del .left, .row-del .right { flex: none; width: 100%; margin-bottom: 10px; } .row-del .right { margin-bottom: 0; } }

  .row-mark { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-mark .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-mark .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-mark { flex-direction: column !important; } .row-mark .left, .row-mark .right { flex: none; width: 100%; margin-bottom: 10px; } .row-mark .right { margin-bottom: 0; } }

  .row-underline { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-underline .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-underline .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-underline { flex-direction: column !important; } .row-underline .left, .row-underline .right { flex: none; width: 100%; margin-bottom: 10px; } .row-underline .right { margin-bottom: 0; } }

  .row-codeblock { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-codeblock .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-codeblock .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-codeblock { flex-direction: column !important; } .row-codeblock .left, .row-codeblock .right { flex: none; width: 100%; margin-bottom: 10px; } .row-codeblock .right { margin-bottom: 0; } }

  .row-table { display: flex; gap: 10px; margin-bottom: 10px; }
  .row-table .left { flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; }
  .row-table .right { flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa; }
  @media (max-width: 768px) { .row-table { flex-direction: column !important; } .row-table .left, .row-table .right { flex: none; width: 100%; margin-bottom: 10px; } .row-table .right { margin-bottom: 0; } }
</style>

### Базовый синтаксис

<!-- Ряд 1: Заголовок 1 уровня -->
<div class="row-h1">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code># Заголовок 1 уровня</code></pre>
  </div>
  <div class="right">
    <h1 style="margin: 0;">Заголовок 1 уровня</h1>
  </div>
</div>

<!-- Ряд 2: Заголовок 2 уровня -->
<div class="row-h2">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>## Заголовок 2 уровня</code></pre>
  </div>
  <div class="right">
    <h2 style="margin: 0;">Заголовок 2 уровня</h2>
  </div>
</div>

<!-- Ряд 3: Заголовок 3 уровня -->
<div class="row-h3">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>### Заголовок 3 уровня</code></pre>
  </div>
  <div class="right">
    <h3 style="margin: 0;">Заголовок 3 уровня</h3>
  </div>
</div>

<!-- Ряд 4: Абзац -->
<div class="row-p">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>Абзац выделяется пустыми строками

Между двумя абзацами должна быть 
пустая строка</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0 0 10px 0;">Абзац выделяется пустыми строками</p>
    <p style="margin: 0;">Между двумя абзацами должна быть пустая строка</p>
  </div>
</div>

<!-- Ряд 5: Нумерованный список -->
<div class="row-ol">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>1. Пункт один
2. Пункт два
3. Пункт три</code></pre>
  </div>
  <div class="right">
    <ol style="margin: 0; padding-left: 20px;">
      <li>Пункт один</li>
      <li>Пункт два</li>
      <li>Пункт три</li>
    </ol>
  </div>
</div>

<!-- Ряд 6: Маркированный список -->
<div class="row-ul">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>* Пункт один
* Пункт два
* Пункт три</code></pre>
  </div>
  <div class="right">
    <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
      <li>Пункт один</li>
      <li>Пункт два</li>
      <li>Пункт три</li>
    </ul>
  </div>
</div>

<!-- Ряд 7: Цитата -->
<div class="row-blockquote">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>> Пример цитаты в Markdown</code></pre>
  </div>
  <div class="right">
    <blockquote>
      <p>Пример цитаты в Markdown</p>
    </blockquote>
  </div>
</div>

<!-- Ряд 8: Курсив -->
<div class="row-em">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>*Курсив*</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0;"><em>Курсив</em></p>
  </div>
</div>

<!-- Ряд 9: Жирный шрифт -->
<div class="row-strong">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>**Жирный текст**</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0;"><strong>Жирный текст</strong></p>
  </div>
</div>

<!-- Ряд 10: Встроенный код -->
<div class="row-code">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>`встроенный код`</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0;"><code>встроенный код</code></p>
  </div>
</div>

<!-- Ряд 11: Блок кода -->
<div class="row-pre">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>```
Блок кода
```</code></pre>
  </div>
  <div class="right">
    <pre style="margin: 0; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; font-family: monospace; border: none;"><code style="color: #5c5b5b; display: block;">Блок кода</code></pre>
  </div>
</div>

<!-- Ряд 12: Горизонтальная линия -->
<div class="row-hr">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>---</code></pre>
  </div>
  <div class="right">
    <hr style="margin: 20px 0 0 0; border: 0; border-top: 1px solid #ddd;">
  </div>
</div>

<!-- Ряд 13: Ссылка -->
<div class="row-link">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>[Ссылка](index.md)</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0;"><a href="index.md">Ссылка</a></p>
  </div>
</div>

<!-- Ряд 14: Изображение -->
<div class="row-img">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>![alt-text](https://url/image.jpg)</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0; text-align: left;">
      <img src="/pet-project/images/logo.svg" alt="Логотип" style="max-width: 75px; height: auto; display: inline-block;">
    </p>
  </div>
</div>

### Расширенный синтаксис

<!-- Ряд 1: Примечание -->
<div class="row-note">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! note "Примечание"
    Текст примечания</code></pre>
  </div>
  <div class="right">
    <div style="margin: 0; padding: 0; border: 1.5px solid #448aff; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(68, 138, 255, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #ecf3ff;">
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #448aff; display: flex; align-items: center; justify-content: center; overflow: hidden; user-select: none; pointer-events: none;">
          <img src="/pet-project/images/pencil-icon.png" alt="Иконка карандаша" style="width: 12px; height: 12px; display: block; user-select: none; pointer-events: none;">
        </div>
        <span>Примечание</span>
      </div>
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст примечания</p>
      </div>
    </div>
  </div>
</div>

<!-- Ряд 2: Информация -->
<div class="row-info">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! info "Информация"
    Текст информации</code></pre>
  </div>
  <div class="right">
    <div style="margin: 0; padding: 0; border: 1.5px solid #00b8d4; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(0, 184, 212, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #e5f8fb;">
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #00b8d4; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <span style="color: #ffffff; font-size: 13px; font-weight: 700; font-family: 'Roboto', 'Segoe UI', 'Arial', sans-serif; line-height: 1; display: flex; align-items: center; justify-content: center; margin: 0; padding: 0;">i</span>
        </div>
        <span>Информация</span>
      </div>
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст информации</p>
      </div>
    </div>
  </div>
</div>

<!-- Ряд 3: Цитата -->
<div class="row-quote">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! quote "Цитата"
    Текст цитаты</code></pre>
  </div>
  <div class="right">
    <div style="margin: 0; padding: 0; border: 1.5px solid #9e9e9e; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(158, 158, 158, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #f5f5f5;">
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <img src="/pet-project/images/quote-icon.png" alt="Цитата" style="height: 10px; width: auto; display: block;">
        </div>
        <span>Цитата</span>
      </div>
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст цитаты</p>
      </div>
    </div>
  </div>
</div>

<!-- Ряд 4: Внимание -->
<div class="row-warning">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! warning "Внимание"
    Текст предупреждения</code></pre>
  </div>
  <div class="right">
    <div style="margin: 0; padding: 0; border: 1.5px solid #ff9800; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(255, 152, 0, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #fff3e0;">
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 18px; height: 18px; fill: #ff9800; display: block;">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
          </svg>
        </div>
        <span>Внимание</span>
      </div>
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст предупреждения</p>
      </div>
    </div>
  </div>
</div>

<!-- Ряд 5: Закрытый спойлер -->
<div class="row-details-closed">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>??? note "Закрытый спойлер"
    Текст спойлера</code></pre>
  </div>
  <div class="right">
    <details class="note" style="margin: 0; border: 1px solid rgba(68, 138, 255, 0.2); border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      <summary style="padding: 10px 16px 10px 48px; font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #ecf3ff; cursor: pointer; list-style: none; user-select: none; border-bottom: 1px solid rgba(68, 138, 255, 0.2);">
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #448aff; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <img src="/pet-project/images/pencil-icon.png" alt="Иконка" style="width: 12px; height: 12px; display: block;">
        </div>
        <span>Закрытый спойлер</span>
      </summary>
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст спойлера</p>
      </div>
    </details>
  </div>
</div>

<!-- Ряд 6: Открытый спойлер -->
<div class="row-details-open">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>???+ note "Открытый спойлер"
    Текст открытого спойлера</code></pre>
  </div>
  <div class="right">
    <details class="note" open style="margin: 0; border: 1px solid rgba(68, 138, 255, 0.2); border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      <summary style="padding: 10px 16px 10px 48px; font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #ecf3ff; cursor: pointer; list-style: none; user-select: none; border-bottom: 1px solid rgba(68, 138, 255, 0.2);">
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #448aff; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <img src="/pet-project/images/pencil-icon.png" alt="Иконка" style="width: 12px; height: 12px; display: block;">
        </div>
        <span>Открытый спойлер</span>
      </summary>
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст открытого спойлера</p>
      </div>
    </details>
  </div>
</div>

<!-- Ряд 7: Вкладки -->
<div class="row-tabs">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>=== "Вкладка 1"

    Текст первой вкладки

=== "Вкладка 2"

    Текст второй вкладки</code></pre>
  </div>
  <div class="right">
    <style>
      .material-tabs { margin: 0; background-color: #ffffff; }
      .material-tabs .tab-headers { display: flex; background-color: #ffffff; border-bottom: 1px solid #e0e0e0; gap: 0; }
      .material-tabs .tab-link { padding: 10px 24px; font-weight: 700; color: #666; font-size: 14px; text-decoration: none; border-bottom: 2px solid transparent; background-color: transparent; transition: all 0.2s ease; display: inline-block; cursor: pointer; margin: 0; }
      .material-tabs .tab-link:hover { color: #000000; background-color: rgba(0, 0, 0, 0.04); }
      .material-tabs .tab-content { display: none; padding: 16px 0; background-color: #ffffff; }
      .material-tabs .tab-link.active { color: #000000 !important; font-weight: 700 !important; border-bottom: 2px solid #000000 !important; background-color: transparent !important; }
      .material-tabs .tab-link.inactive { color: #666 !important; font-weight: 700 !important; border-bottom: 2px solid transparent !important; background-color: transparent !important; }
    </style>
    <div class="material-tabs">
      <div class="tab-headers">
        <a href="#tab1" class="tab-link active" data-tab="tab1">Вкладка 1</a>
        <a href="#tab2" class="tab-link inactive" data-tab="tab2">Вкладка 2</a>
      </div>
      <div id="tab1" class="tab-content" style="display: block;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст первой вкладки</p>
      </div>
      <div id="tab2" class="tab-content">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст второй вкладки</p>
      </div>
    </div>
    <script>
      document.querySelectorAll('.tab-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          var tabId = this.getAttribute('data-tab');
          document.querySelectorAll('.tab-link').forEach(function(el) {
            el.classList.remove('active');
            el.classList.add('inactive');
            el.style.color = '#666';
            el.style.fontWeight = '700';
            el.style.borderBottom = '2px solid transparent';
            el.style.backgroundColor = 'transparent';
          });
          this.classList.remove('inactive');
          this.classList.add('active');
          this.style.color = '#000000';
          this.style.fontWeight = '700';
          this.style.borderBottom = '2px solid #000000';
          this.style.backgroundColor = 'transparent';
          document.querySelectorAll('.tab-content').forEach(function(el) {
            el.style.display = 'none';
          });
          document.getElementById(tabId).style.display = 'block';
        });
      });
    </script>
  </div>
</div>

<!-- Ряд 8: Зачёркнутый текст -->
<div class="row-del">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>~~Зачёркнутый текст~~</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0; font-size: 14px; line-height: 1.6;">
      <del>Зачёркнутый текст</del>
    </p>
  </div>
</div>

<!-- Ряд 9: Выделенный текст -->
<div class="row-mark">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>==Выделенный текст==</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0; font-size: 14px; line-height: 1.6;">
      <mark style="background-color: #ffff00; color: #000000; padding: 0 2px;">Выделенный текст</mark>
    </p>
  </div>
</div>

<!-- Ряд 10: Подчёркнутый текст -->
<div class="row-underline">
  <div class="left">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>^^Подчёркнутый текст^^</code></pre>
  </div>
  <div class="right">
    <p style="margin: 0; font-size: 14px; line-height: 1.6;">
      <u>Подчёркнутый текст</u>
    </p>
  </div>
</div>

<!-- Ряд 11: Блок кода с заголовком -->
<div class="row-codeblock">
  <div class="left">
    <pre style="color: #5c5b5b; margin: 0; font-family: 'Consolas', 'Monaco', monospace; font-size: 14px; line-height: 1.6; white-space: pre-wrap;"><code>```go title="Пример кода"
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```</code></pre>
  </div>
  <div class="right">
    <div style="margin: 0; border: 1px solid #e0e0e0; border-radius: 4px; background-color: #ffffff; overflow: hidden;">
      <div style="padding: 8px 16px; background-color: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-size: 14px; font-weight: 700; color: #333; font-family: 'Roboto', sans-serif;">
        Пример кода
      </div>
      <pre style="margin: 0; background: #f7ecec; padding: 16px; overflow-x: auto; font-family: 'Consolas', 'Monaco', monospace; font-size: 14px; line-height: 1.6; border: none; border-radius: 0;"><code style="display: block; color: #5c5b5b; padding: 0;">package <span style="color: #6186cd;">main</span>

import <span style="color: #388b62;">"fmt"</span>

func <span style="color: #6186cd;">main</span>() {
    fmt.Println(<span style="color: #388b62;">"Hello, World!"</span>)
}</code></pre>
    </div>
  </div>
</div>

<!-- Ряд 12: Таблица -->
<div class="row-table">
  <div class="left">
    <pre style="color: #5c5b5b; margin: 0; font-family: 'Consolas', 'Monaco', monospace; font-size: 14px; line-height: 1.6; white-space: pre-wrap;"><code>|Столбец 1  |Столбец 2  |
|:---------:|:---------:|
|ячейка 1.1 |ячейка 1.2 |
|ячейка 2.1 |ячейка 2.2 |</code></pre>
  </div>
  <div class="right">
    <table style="background-color: #f7ecec; border-collapse: collapse; width: 100%; border: 1px solid #d0c8c8; font-size: 14px; font-family: 'Roboto', sans-serif;">
      <thead>
        <tr>
          <th style="background-color: #e8dcdc; padding: 10px 16px; text-align: center; font-weight: 700; color: #333; border-bottom: 2px solid #d0c8c8;">Столбец 1</th>
          <th style="background-color: #e8dcdc; padding: 10px 16px; text-align: center; font-weight: 700; color: #333; border-bottom: 2px solid #d0c8c8;">Столбец 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px 16px; text-align: center; color: #5c5b5b; border-bottom: 1px solid #d0c8c8;">ячейка 1.1</td>
          <td style="padding: 10px 16px; text-align: center; color: #5c5b5b; border-bottom: 1px solid #d0c8c8;">ячейка 1.2</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; text-align: center; color: #5c5b5b; border-bottom: none;">ячейка 2.1</td>
          <td style="padding: 10px 16px; text-align: center; color: #5c5b5b; border-bottom: none;">ячейка 2.2</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>