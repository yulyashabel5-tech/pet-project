# Markdown

Markdown (маркдаун) — это облегчённый язык разметки для форматирования текстов.

В маркдаун вместо сложных инструментов форматирования применяются обычные символы: звёздочки, решётки, дефисы и другие знаки. Их комбинации позволяют задавать структуру документа и выделять смысловые фрагменты.

Текст, размеченный с помощью маркдауна, легко читать в исходном виде и править в любом редакторе. При необходимости он легко преобразуется в другие форматы, например, в `HTML` или `PDF`.

## Синтаксис

Синтаксис маркдауна делится на базовый и расширенный. 

**Базовый синтаксис** содержит минималный набор элементов: заголовки, абзацы, списки, цитаты, ссылки и способы выделения текста. Он описан в спецификации CommonMark. Спецификация CommonMark была разработана для единообразного отображения текста на разных платформах.

**Расширенный синтаксис** предоставляет дополнительные возможности, отсутствующие в базовом: таблицы, сноски, чек-листы, подсветку кода и другие элементы. Эти элементы реализованы не везде — их поддержка зависит от конкретного редактора, конвертера или платформы.

Таким образом, базовый синтаксис обеспечивает универсальность, а расширенный даёт гибкость для решения специфических задач.

### Базовый синтаксис

<!-- Ряд 1: Заголовок 1 уровня -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code># Заголовок 1 уровня</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <h1 style="margin: 0;">Заголовок 1 уровня</h1>
  </div>

</div>

<!-- Ряд 2: Заголовок 2 уровня -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>## Заголовок 2 уровня</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <h2 style="margin: 0;">Заголовок 2 уровня</h2>
  </div>

</div>

<!-- Ряд 3: Заголовок 3 уровня -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>### Заголовок 3 уровня</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <h3 style="margin: 0;">Заголовок 3 уровня</h3>
  </div>

</div>

<!-- Ряд 4: Абзац -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>Абзац выделяется пустыми строками

Между двумя абзацами должна быть 
пустая строка</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <p style="margin: 0 0 10px 0;">Абзац выделяется пустыми строками</p>
    <p style="margin: 0;">Между двумя абзацами должна быть пустая строка</p>
  </div>

</div>

<!-- Ряд 5: Нумерованный список -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>1. Пункт один
2. Пункт два
3. Пункт три</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <ol style="margin: 0; padding-left: 20px;">
      <li>Пункт один</li>
      <li>Пункт два</li>
      <li>Пункт три</li>
    </ol>
  </div>

</div>

<!-- Ряд 6: Маркированный список с буллетами -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>* Пункт один
* Пункт два
* Пункт три</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
      <li>Пункт один</li>
      <li>Пункт два</li>
      <li>Пункт три</li>
    </ul>
  </div>

</div>

<!-- Ряд 7: Цитата (простой вариант) -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>> Пример цитаты в Markdown</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <blockquote>
      <p>Пример цитаты в Markdown</p>
    </blockquote>
  </div>

</div>

<!-- Ряд 8: Курсив -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>*Курсив*</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <p style="margin: 0;"><em>Курсив</em></p>
  </div>

</div>

<!-- Ряд 9: Жирный шрифт -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>**Жирный текст** </code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <p style="margin: 0;"><strong>Жирный текст </strong></p>
  </div>

</div>

<!-- Ряд 10: Встроенный код -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>`встроенный код` </code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <p style="margin: 0;"><code>встроенный код</code> </p>
  </div>

</div>

<!-- Ряд 11: Блок кода -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>```
Блок кода
```</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <pre style="margin: 0; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto; font-family: monospace; border: none;"><code style="color: #5c5b5b; display: block;">Блок кода</code></pre>
  </div>

</div>

<!-- Ряд 12: Горизонтальная линия -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>---</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <hr style="margin: 20px 0 0 0; border: 0; border-top: 1px solid #ddd;">
  </div>

</div>

<!-- Ряд 13: Ссылка на index.md -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>[Ссылка](index.md)</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <p style="margin: 0;"><a href="index.md">Ссылка</a></p>
  </div>

</div>

<!-- Ряд 14: Изображение -->
<div style="display: flex; gap: 10px; align-items: stretch; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>![alt-text](https://url/image.jpg)</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    <p style="margin: 0; text-align: left;">
      <img src="/images/logo.svg" alt="Логотип" style="max-width: 75px; height: auto; display: inline-block;">
    </p>
  </div>

</div>

### Расширенный синтаксис

<!-- Ряд 1: Примечание -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! note "Примечание"
    Текст примечания</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    
    <!-- Примечание в стиле Material -->
    <div style="margin: 0; padding: 0; border: 1.5px solid #448aff; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      
      <!-- Заголовок с иконкой (фон #ecf3ff) -->
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(68, 138, 255, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #ecf3ff;">
        
        <!-- Иконка из папки images (PNG) — выделение запрещено -->
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #448aff; display: flex; align-items: center; justify-content: center; overflow: hidden; user-select: none; pointer-events: none;">
          <img src="/images/pencil-icon.png" alt="Иконка карандаша" style="width: 12px; height: 12px; display: block; user-select: none; pointer-events: none;">
        </div>
        
        <!-- Слово "Примечание" можно выделять -->
        <span>Примечание</span>
      </div>
      
      <!-- Текст примечания -->
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст примечания</p>
      </div>
    </div>
    
  </div>

</div>

<!-- Ряд 2: Информация -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! info "Информация"
    Текст информации</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    
    <!-- Информация в стиле Material -->
    <div style="margin: 0; padding: 0; border: 1.5px solid #00b8d4; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      
      <!-- Заголовок с иконкой (фон #e5f8fb) -->
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(0, 184, 212, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #e5f8fb;">
        
        <!-- Иконка "i" в кружке (идеально по центру) -->
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #00b8d4; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <span style="color: #ffffff; font-size: 13px; font-weight: 700; font-family: 'Roboto', 'Segoe UI', 'Arial', sans-serif; line-height: 1; display: flex; align-items: center; justify-content: center; margin: 0; padding: 0;">i</span>
        </div>
        
        <!-- Слово "Информация" можно выделять -->
        <span>Информация</span>
      </div>
      
      <!-- Текст информации -->
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст информации</p>
      </div>
    </div>
    
  </div>

</div>

<!-- Ряд 3: Цитата -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! quote "Цитата"
    Текст цитаты</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    
    <!-- Цитата в стиле Material -->
    <div style="margin: 0; padding: 0; border: 1.5px solid #9e9e9e; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      
      <!-- Заголовок с иконкой (фон #f5f5f5) -->
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(158, 158, 158, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #f5f5f5;">
        
        <!-- Иконка цитаты (PNG) с уменьшенным размером -->
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <img src="/images/quote-icon.png" alt="Цитата" style="height: 10px; width: auto; display: block;">
        </div>
        
        <!-- Слово "Цитата" можно выделять -->
        <span>Цитата</span>
      </div>
      
      <!-- Текст цитаты -->
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст цитаты</p>
      </div>
    </div>
    
  </div>

</div>

<!-- Ряд 4: Внимание -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  
  <!-- Левый блок: Пример синтаксиса -->
  <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
    <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>!!! warning "Внимание"
    Текст предупреждения</code></pre>
  </div>

  <!-- Правый блок: Отображение -->
  <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
    
    <!-- Внимание в стиле Material -->
    <div style="margin: 0; padding: 0; border: 1.5px solid #ff9800; border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
      
      <!-- Заголовок с иконкой (фон #fff3e0) -->
      <div style="padding: 10px 16px 10px 48px; border-bottom: 1px solid rgba(255, 152, 0, 0.2); font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #fff3e0;">
        
        <!-- Иконка треугольника с восклицательным знаком -->
        <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 18px; height: 18px; fill: #ff9800; display: block;">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
          </svg>
        </div>
        
        <!-- Слово "Внимание" можно выделять -->
        <span>Внимание</span>
      </div>
      
      <!-- Текст предупреждения -->
      <div style="padding: 12px 16px; background-color: #ffffff;">
        <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст предупреждения</p>
      </div>
    </div>
    
  </div>

</div>

<!-- Ряд 5: Закрытый спойлер -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>??? note "Закрытый спойлер"
    Текст спойлера</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">

        <div class="md-typeset">
            
            <!-- ИСПОЛЬЗУЕМ НАТИВНЫЙ ТЕГ <details> -->
            <details class="note" style="margin: 0; border: 1px solid rgba(68, 138, 255, 0.2); border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">

                <!-- Заголовок -->
                <summary style="padding: 10px 16px 10px 48px; font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #ecf3ff; cursor: pointer; list-style: none; user-select: none; border-bottom: 1px solid rgba(68, 138, 255, 0.2);">

                    <!-- Иконка карандаша -->
                    <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #448aff; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
                        <img src="/images/pencil-icon.png" alt="Иконка" style="width: 12px; height: 12px; display: block;">
                    </div>

                    <span>Закрытый спойлер</span>
                </summary>

                <!-- Содержимое -->
                <div style="padding: 12px 16px; background-color: #ffffff;">
                    <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст спойлера</p>
                </div>

            </details>
        </div>
    </div>
</div>

<!-- Ряд 6: Открытый спойлер -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>???+ note "Открытый спойлер"
    Текст открытого спойлера</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">

        <div class="md-typeset">
            
            <!-- Используем нативный тег <details> с атрибутом open -->
            <details class="note" open style="margin: 0; border: 1px solid rgba(68, 138, 255, 0.2); border-radius: 4px; background-color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">

                <!-- Заголовок -->
                <summary style="padding: 10px 16px 10px 48px; font-weight: 700; color: #000000; font-size: 14px; position: relative; display: flex; align-items: center; background-color: #ecf3ff; cursor: pointer; list-style: none; user-select: none; border-bottom: 1px solid rgba(68, 138, 255, 0.2);">

                    <!-- Иконка карандаша -->
                    <div style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 22px; height: 22px; border-radius: 50%; background-color: #448aff; display: flex; align-items: center; justify-content: center; user-select: none; pointer-events: none;">
                        <img src="/images/pencil-icon.png" alt="Иконка" style="width: 12px; height: 12px; display: block;">
                    </div>

                    <span>Открытый спойлер</span>
                </summary>

                <!-- Содержимое (изначально видимо, так как есть атрибут open) -->
                <div style="padding: 12px 16px; background-color: #ffffff;">
                    <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст открытого спойлера</p>
                </div>

            </details>
        </div>
    </div>
</div>

<!-- Ряд 7: Вкладки -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>=== "Вкладка 1"

    Текст первой вкладки

=== "Вкладка 2"

    Текст второй вкладки</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #ffffff;">

        <style>
            /* Стили для вкладок как в Material */
            .material-tabs {
                margin: 0;
                background-color: #ffffff;
            }
            
            .material-tabs .tab-headers {
                display: flex;
                background-color: #ffffff;
                border-bottom: 1px solid #e0e0e0;
                gap: 0;
            }
            
            .material-tabs .tab-link {
                padding: 10px 24px;
                font-weight: 700;
                color: #666;
                font-size: 14px;
                text-decoration: none;
                border-bottom: 2px solid transparent;
                background-color: transparent;
                transition: all 0.2s ease;
                display: inline-block;
                cursor: pointer;
                margin: 0;
            }
            
            .material-tabs .tab-link:hover {
                color: #000000;
                background-color: rgba(0, 0, 0, 0.04);
            }
            
            .material-tabs .tab-content {
                display: none;
                padding: 16px 0;
                background-color: #ffffff;
            }
            
            /* Стиль для активной вкладки — ЧЁРНЫЙ текст + полоса */
            .material-tabs .tab-link.active {
                color: #000000 !important;
                font-weight: 700 !important;
                border-bottom: 2px solid #000000 !important;
                background-color: transparent !important;
            }
            
            /* Стиль для неактивной вкладки — тоже жирный, но серый */
            .material-tabs .tab-link.inactive {
                color: #666 !important;
                font-weight: 700 !important;
                border-bottom: 2px solid transparent !important;
                background-color: transparent !important;
            }
        </style>

        <div class="material-tabs">
            
            <!-- Заголовки вкладок -->
            <div class="tab-headers">
                <a href="#tab1" class="tab-link active" data-tab="tab1">Вкладка 1</a>
                <a href="#tab2" class="tab-link inactive" data-tab="tab2">Вкладка 2</a>
            </div>
            
            <!-- Содержимое вкладок -->
            <div id="tab1" class="tab-content" style="display: block;">
                <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст первой вкладки</p>
            </div>
            
            <div id="tab2" class="tab-content">
                <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">Текст второй вкладки</p>
            </div>
            
        </div>
        
        <script>
            // Скрипт для переключения вкладок
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
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>~~Зачёркнутый текст~~</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
        <p style="margin: 0; font-size: 14px; line-height: 1.6;">
            <del>Зачёркнутый текст</del>
        </p>
    </div>

</div>

<!-- Ряд 9: Выделенный текст -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>==Выделенный текст==</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
        <p style="margin: 0; font-size: 14px; line-height: 1.6;">
            <mark style="background-color: #ffff00; color: #000000; padding: 0 2px;">Выделенный текст</mark>
        </p>
    </div>

</div>

<!-- Ряд 10: Подчёркнутый текст -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #2d2d2d; margin: 0; font-family: monospace; white-space: pre-wrap;"><code>^^Подчёркнутый текст^^</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
        <p style="margin: 0; font-size: 14px; line-height: 1.6;">
            <u>Подчёркнутый текст</u>
        </p>
    </div>

</div>

<!-- Ряд 11: Блок кода -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса (без подсветки) -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #5c5b5b; margin: 0; font-family: 'Consolas', 'Monaco', monospace; font-size: 14px; line-height: 1.6; white-space: pre-wrap;"><code>```go title="Пример кода"
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
        
        <!-- Блок кода с заголовком -->
        <div style="margin: 0; border: 1px solid #e0e0e0; border-radius: 4px; background-color: #ffffff; overflow: hidden;">
            
            <!-- Заголовок блока кода (жирный) -->
            <div style="padding: 8px 16px; background-color: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-size: 14px; font-weight: 700; color: #333; font-family: 'Roboto', sans-serif;">
                Пример кода
            </div>
            
            <!-- Тело блока кода с подсветкой, без отступов -->
            <pre style="margin: 0; background: #f7ecec; padding: 16px; overflow-x: auto; font-family: 'Consolas', 'Monaco', monospace; font-size: 14px; line-height: 1.6; border: none; border-radius: 0;"><code style="display: block; color: #5c5b5b; padding: 0;">package <span style="color: #6186cd;">main</span>

import <span style="color: #388b62;">"fmt"</span>

func <span style="color: #6186cd;">main</span>() {
    fmt.Println(<span style="color: #388b62;">"Hello, World!"</span>)
}</code></pre>
        </div>
        
    </div>

</div>

<!-- Ряд 12: Таблица -->
<div style="display: flex; gap: 10px; margin-bottom: 10px;">

    <!-- Левый блок: Пример синтаксиса -->
    <div style="flex: 1; background: #f7ecec; padding: 15px; border-radius: 5px; overflow-x: auto;">
        <pre style="color: #5c5b5b; margin: 0; font-family: 'Consolas', 'Monaco', monospace; font-size: 14px; line-height: 1.6; white-space: pre-wrap;"><code>|Столбец 1  |Столбец 2  |
|:---------:|:---------:|
|ячейка 1.1 |ячейка 1.2 |
|ячейка 2.1 |ячейка 2.2 |</code></pre>
    </div>

    <!-- Правый блок: Отображение -->
    <div style="flex: 1; border: 2px solid #800020; border-radius: 5px; padding: 15px; background-color: #f8f9fa;">
        
        <!-- Таблица с прямыми углами -->
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