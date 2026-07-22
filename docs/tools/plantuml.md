---
tags:
  - plantuml
  - help
  - manual
---

# PlantUML

UML — это язык для визуализации, проектирования и документирования программных систем на основе абстрактных моделей.

PlantUML — это инструмент для создания диаграмм и схем с помощью текстового описания. Такой подход позволяет хранить их в системе контроля версий, отслеживать изменения и автоматизировать генерацию.

PlantUML позволяет создавать диаграммы следующих типов:

* диаграммы последовательности;

* диаграммы C4;

* диаграммы активностей;

* диаграммы прецедентов;

* диаграммы состояний.

## Общий синтаксис PlantUML

Независимо от типа диаграммы, её код заключается в теги `@startuml` и `@enduml`:

```
@startuml
@enduml
```

### Общие команды

Для всех диаграмм доступны общие команды, управляющие отображением:

| Команда | Результат |
| :--- | :--- |
| title | Заголовок над диаграммой |
| caption | Подпись под диаграммой |
| legend | Легенда с пояснениями |
| header / footer | Колонтитулы сверху и снизу |
| scale | Масштабирование изображения |

### Перенос строки

Для переноса строки в надписях используется `%n()`.

!!! note "Примечание"
    В текущих версиях PlantUML также работает `\n`, но он устаревает. Для новых диаграмм рекомендуется использовать `%n()`.

### Комментарии

Для пояснений в коде диаграммы используются комментарии:

* Однострочные — начинаются с `'`.

* Многострочные — выделяются `/'` и `'/`.

```
@startuml
' Однострочный комментарий
/'
  Многострочный
  комментарий
'/
@enduml
```

## Диаграмма последовательности

Диаграмма последовательности (sequence diagram) показывает взаимодействие между объектами: кто, в каком порядке и каким образом выполняет операции. С её помощью можно описать любой процесс в системе — от пользовательского сценария до внутреннего алгоритма.

### Объявление участников

Участники в диаграмме последовательности — это объекты системы, задействованные в описываемом процессе:

* Пользователь — actor (внешнее действующее лицо).

* База данных — database (хранилище данных).

* Другой объект — participant (любой внутренний компонент системы, например, модуль или сервис).

Участники объявляются в начале диаграммы в формате `тип_участника Имя_участника`:

```go title="Пример"
@startuml
actor Пользователь
participant Приложение
participant Бэк
database "База данных"
@enduml
```

Порядок объявления участников определяет их расположение на диаграмме слева направо.

??? quote "Результат"
    ```puml
    @startuml
    actor Пользователь
    participant Приложение
    participant Бэк
    database "База данных"
    @enduml
    ```

!!! note "Примечание"
    Если имя участника содержит пробелы, оно заключается в кавычки.

Для сокращения длинных имён в тексте сценария используется ключевое слово `as`, после которого указывается псевдоним участника.

```go title="Пример"
@startuml
actor Пользователь as user
database "База данных" as БД
@enduml
```

### Описание действий

После объявления участников описываются взаимодействия между ними. В большинстве сценариев используются два типа действий:

* Синхронный вызов `->` (запрос от одного участника к другому).

* Ответ на вызов `<--` (возврат результата).

Взаимодействия двух участников описываются в формате:

* Вызов: `Участник-1 -> Участник-2: Описание вызова`.

* Вызов: `Участник-1 <-- Участник-2: Описание ответа`.

```go title="Пример"
@startuml
…
Пользователь -> Приложение: вызов приложения
Пользователь <-- Приложение: ответ на вызов
…
@enduml
```

??? quote "Результат"
    ```puml
    @startuml
    actor Пользователь
    participant Приложение
    participant Бэк
    database "База данных"

    Пользователь -> Приложение: вызов приложения
    Пользователь <-- Приложение: ответ на вызов
    @enduml
    ```

### Альтернативные сценарии

Диаграмма последовательности позволяет отображать не только основной (успешный) сценарий, но и его альтернативные варианты.

Для группировки действий альтернативного сценария используется `alt`:

```go title="Пример"
@startuml
…
alt Альтернативный сценарий
Пользователь -> Приложение: отмена действия
Пользователь <-- Приложение: отображение главного экрана
end alt
…
@enduml
```
??? quote "Результат"
    ```puml
    @startuml
    actor Пользователь
    participant Приложение
    participant Бэк
    database "База данных"

    Пользователь -> Приложение: вызов приложения
    Пользователь <-- Приложение: ответ на вызов

    alt Альтернативный сценарий
    Пользователь -> Приложение: отмена действия
    Пользователь <-- Приложение: отображение главного экрана
    end alt
    @enduml
    ```

Кроме `alt` доступны и другие команды для группировки действий:

* `opt` — действия, которые выполняются только при определённом условии;

* `loop` — повторяющиеся циклические вызовы;

* `group` — действия, объединённые по смыслу.

## Диаграммы C4

C4-модель (Context, Containers, Components, Code) — это подход к визуализации архитектуры программных систем с разной степенью детализации. Она включает четыре уровня:

* [Контекстная диаграмма.](#_8)

* [Диаграмма контейнеров.](#_9)

* [Диаграмма компонентов.](#_10)

* [Диаграмма классов.](#_11)

### Подключение библиотеки PlantUML

Для работы с C4-диаграммами в начале файла подключается нужный компонет из стандартной библиотеки PlantUML:

* **Контекстная диаграмма** – `!include <C4/C4_Context>`

* **Диаграмма контейнеров** — `!include <C4/C4_Container>`

* **Диаграмма компонентов** — `!include <C4/C4_Component>`

```go title="Пример"
@startuml
!include <C4/C4_Container>
…
@enduml
```

!!! note "Примечание"
    Для диаграммы классов отдельная библиотека не требуется.

### Общие команды для C4-диаграмм

Для всех C4-диаграмм доступны общие команды, управляющие отображением:

| Команда | Результат |
| :--- | :--- |
| `LAYOUT_TOP_DOWN()` | Расположение элементов сверху вниз |
| `LAYOUT_LEFT_RIGHT()` | Расположение элементов слева направо |
| `LAYOUT_LANDSCAPE()` | Альбомная ориентация диаграммы |
| `LAYOUT_WITH_LEGEND()` | Легенда диаграммы |
| `LAYOUT_AS_SKETCH()` | Стиль «от руки» |
| `$BOUNDARY_BORDER_STYLE = "solid"` | Сплошная граница |
| `$BOUNDARY_BORDER_STYLE = "bold"` | Жирная граница |
| `$BOUNDARY_BORDER_STYLE = "dotted"` | Точечная граница |

### Контекстная диаграмма

Контекстная диаграмма показывает систему в окружении пользователей и внешних систем.

!!! note "Примечание"
    Для построения контекстной диаграммы **требуется** [подключить C4-библиотеку.](#plantuml_2)

**Элементы контекстной диаграммы**

| Элемент | Синтаксис | Назначение |
| :--- | :--- | :--- |
| Пользователь | `Person(alias, "Метка", "Описание")` | Внешний пользователь системы |
| Внешний пользователь | `Person_Ext(alias, "Метка", "Описание")` | Пользователь вне системы |
| Система | `System(alias, "Метка", "Описание")` | Описываемая система |
| Внешняя система | `System_Ext(alias, "Метка", "Описание")` | Внешняя система для интеграции |

```go title="Пример"
@startuml
!include <C4/C4_Context>

title Контекстная диаграмма интернет-магазина

Person(покупатель, "Покупатель", "Пользователь, который делает заказ")
System(магазин, "Интернет-магазин", "Платформа для покупки товаров")
System_Ext(платежи, "Платёжная система", "Обрабатывает оплату")

Rel(покупатель, магазин, "Совершает покупки", "HTTPS")
Rel(магазин, платежи, "Отправляет запрос на оплату", "API")
@enduml
```

??? quote "Результат"
    ```puml
   !include <C4/C4_Context>

   title Контекстная диаграмма интернет-магазина

   Person(покупатель, "Покупатель", "Пользователь, который делает заказ")
   System(магазин, "Интернет-магазин", "Платформа для покупки товаров")
   System_Ext(платежи, "Платёжная система", "Обрабатывает оплату")

   Rel(покупатель, магазин, "Совершает покупки", "HTTPS")
   Rel(магазин, платежи, "Отправляет запрос на оплату", "API")
   @enduml
    ```

### Диаграмма контейнеров

Диаграмма контейнеров раскрывает систему на уровне крупных технических блоков.

!!! note "Примечание"
    Для построения диаграммы контейнеров **требуется** [подключить C4-библиотеку.](#plantuml_2)

**Элементы диаграммы контейнеров**

| Элемент | Синтаксис | Назначение |
| :--- | :--- | :--- |
| Пользователь | `Person(alias, "Метка", "Описание")` | Внешний пользователь системы |
| Контейнер | `Container(alias, "Метка", "Технология", "Описание")` | Крупный компонент (БД, API, приложение) |
| База данных | `ContainerDb(alias, "Метка", "Технология", "Описание")` | Хранилище данных |
| Внешняя система | `System_Ext(alias, "Метка", "Описание")` | Внешняя система для интеграции |
| Граница системы | `System_Boundary(alias, "Метка") { ... }` | Группирует элементы внутри системы |

```go title="Пример"
@startuml
!include <C4/C4_Container>

title Диаграмма контейнеров интернет-магазина

Person(покупатель, "Покупатель")

System_Boundary(магазин, "Интернет-магазин") {
    Container(сайт, "Веб-приложение", "React", "Интерфейс пользователя")
    Container(апи, "API-шлюз", "Spring Boot", "Бизнес-логика")
    ContainerDb(бд, "База данных", "PostgreSQL", "Хранение данных")
    System_Ext(платежи, "Платёжная система", "Обрабатывает оплату")
}

Rel(покупатель, сайт, "Использует", "HTTPS")
Rel(сайт, апи, "Отправляет запросы", "REST")
Rel(апи, бд, "Читает/пишет", "JDBC")
Rel(апи, платежи, "Отправляет запрос на оплату", "API")
@enduml
```

??? quote "Результат"
    ```puml
   !include <C4/C4_Container>

   title Диаграмма контейнеров интернет-магазина

   Person(покупатель, "Покупатель")

   System_Boundary(магазин, "Интернет-магазин") {
       Container(сайт, "Веб-приложение", "React", "Интерфейс пользователя")
       Container(апи, "API-шлюз", "Spring Boot", "Бизнес-логика")
       ContainerDb(бд, "База данных", "PostgreSQL", "Хранение данных")
       System_Ext(платежи, "Платёжная система", "Обрабатывает оплату")
   }

   Rel(покупатель, сайт, "Использует", "HTTPS")
   Rel(сайт, апи, "Отправляет запросы", "REST")
   Rel(апи, бд, "Читает/пишет", "JDBC")
   Rel(апи, платежи, "Отправляет запрос на оплату", "API")
   @enduml
    ```

### Диаграмма компонентов

Диаграмма компонентов показывает внутреннее устройство конкретного контейнера.

!!! note "Примечание"
    Для построения диаграммы компонентов **требуется** [подключить C4-библиотеку.](#plantuml_2)

**Элементы диаграммы компонентов**

| Элемент | Синтаксис | Назначение |
| :--- | :--- | :--- |
| Компонент | `Component(alias, "Метка", "Технология", "Описание")` | Модуль внутри контейнера |
| Компонент БД | `ComponentDb(alias, "Метка", "Технология", "Описание")` | Компонент для работы с данными |
| Граница контейнера | `Container_Boundary(alias, "Метка") { ... }` | Группирует компоненты внутри контейнера |

```go title="Пример"
@startuml
!include <C4/C4_Component>

title Диаграмма компонентов интернет-магазина

Container_Boundary(апи, "API-шлюз") {
    Component(контроллер, "Контроллер заказов", "Spring MVC", "Принимает запросы")
    Component(сервис, "Сервис заказов", "Spring Bean", "Бизнес-логика")
    ComponentDb(репозиторий, "Репозиторий заказов", "Spring Data", "Доступ к данным")
}

Rel(контроллер, сервис, "Вызывает")
Rel(сервис, репозиторий, "Использует")
@enduml
```

??? quote "Результат"
    ```puml
   !include <C4/C4_Component>

   title Диаграмма компонентов интернет-магазина

   Container_Boundary(апи, "API-шлюз") {
       Component(контроллер, "Контроллер заказов", "Spring MVC", "Принимает запросы")
       Component(сервис, "Сервис заказов", "Spring Bean", "Бизнес-логика")
       ComponentDb(репозиторий, "Репозиторий заказов", "Spring Data", "Доступ к данным")
   }

   Rel(контроллер, сервис, "Вызывает")
   Rel(сервис, репозиторий, "Использует")
   @enduml
    ```

### Диаграмма классов

Диаграмма классов детализирует реализацию компонентов на уровне кода (необязательный уровень).

!!! note "Примечание"
    Для построения диаграммы классов **не требуется** подключать C4-библиотеку — используется стандартный синтаксис PlantUML.

**Элементы диаграммы классов**

| Элемент | Синтаксис | Назначение |
| :--- | :--- | :--- |
| Класс | `class Имя { ... }` | Описывает класс с полями и методами |
| Интерфейс | `interface Имя { ... }` | Описывает интерфейс |
| Абстрактный класс | `abstract class Имя { ... }` | Описывает абстрактный класс |
| Наследование | `Child <|-- Parent` | Класс наследует другой класс |
| Реализация интерфейса | `Class <|.. Interface` | Класс реализует интерфейс |
| Ассоциация | `Class --> Other` | Прямая связь между классами |
| Зависимость | `Class ..> Other` | Класс использует другой класс |
| Композиция | `Class *-- Part` | Часть не может существовать без целого |
| Агрегация | `Class o-- Part` | Часть может существовать отдельно |

```go title="Пример"
@startuml
title Диаграмма классов (API-шлюз) интернет-магазина

interface IOrderController {
    + createOrder(request: OrderRequest): OrderResponse
    + getOrder(id: String): OrderDetails
    + cancelOrder(id: String): void
}

class OrderController {
    - orderService: IOrderService
    - validator: IOrderValidator
    + createOrder(request: OrderRequest): OrderResponse
    + getOrder(id: String): OrderDetails
    + cancelOrder(id: String): void
}

interface IOrderService {
    + processOrder(request: OrderRequest): Order
    + getOrder(id: String): Order
    + cancelOrder(id: String): void
}

class OrderService {
    - orderRepository: IOrderRepository
    - pricingCalculator: IPricingCalculator
    + processOrder(request: OrderRequest): Order
    + getOrder(id: String): Order
    + cancelOrder(id: String): void
}

interface IOrderRepository {
    + save(order: Order): Order
    + findById(id: String): Order
    + updateStatus(id: String, status: Status): void
}

class OrderRepository {
    - jdbcTemplate: JdbcTemplate
    + save(order: Order): Order
    + findById(id: String): Order
    + updateStatus(id: String, status: Status): void
}

class Order {
    - id: String
    - customerId: String
    - items: List<OrderItem>
    - total: BigDecimal
    - status: Status
    + calculateTotal(): BigDecimal
    + addItem(item: OrderItem): void
}

enum Status {
    PENDING
    CONFIRMED
    SHIPPED
    CANCELLED
}

IOrderController <|-- OrderController
IOrderService <|-- OrderService
IOrderRepository <|-- OrderRepository

OrderController --> IOrderService : uses
OrderService --> IOrderRepository : uses
OrderService ..> Order : creates
OrderRepository ..> Order : manages
Order *-- Status : uses
@enduml
```

??? quote "Результат"
    ```puml
   title Диаграмма классов (API-шлюз) интернет-магазина

   interface IOrderController {
      + createOrder(request: OrderRequest): OrderResponse
      + getOrder(id: String): OrderDetails
      + cancelOrder(id: String): void
   }

   class OrderController {
      - orderService: IOrderService
      - validator: IOrderValidator
      + createOrder(request: OrderRequest): OrderResponse
      + getOrder(id: String): OrderDetails
      + cancelOrder(id: String): void
   }

   interface IOrderService {
      + processOrder(request: OrderRequest): Order
      + getOrder(id: String): Order
      + cancelOrder(id: String): void
}

   class OrderService {
      - orderRepository: IOrderRepository
      - pricingCalculator: IPricingCalculator
      + processOrder(request: OrderRequest): Order
      + getOrder(id: String): Order
      + cancelOrder(id: String): void
   }

   interface IOrderRepository {
      + save(order: Order): Order
      + findById(id: String): Order
      + updateStatus(id: String, status: Status): void
   }

   class OrderRepository {
      - jdbcTemplate: JdbcTemplate
      + save(order: Order): Order
      + findById(id: String): Order
      + updateStatus(id: String, status: Status): void
   }

   class Order {
      - id: String
      - customerId: String
      - items: List<OrderItem>
      - total: BigDecimal
      - status: Status
      + calculateTotal(): BigDecimal
      + addItem(item: OrderItem): void
   }

   enum Status {
      PENDING
      CONFIRMED
      SHIPPED
      CANCELLED
   }

   IOrderController <|-- OrderController
   IOrderService <|-- OrderService
   IOrderRepository <|-- OrderRepository

   OrderController --> IOrderService : uses
   OrderService --> IOrderRepository : uses
   OrderService ..> Order : creates
   OrderRepository ..> Order : manages
   Order *-- Status : uses
   @enduml
    ```

## Генерация PlantUML в MkDocs Materials

Для автоматической генерации диаграмм при сборке проекта используйте плагин `mkdocs_puml`:

1\. Установите плагин с помощью пакетного менеджера Python:

```
pip install mkdocs_puml
```

2\. Подключите плагин в конфигурационном файле проекта:

```go title="mkdocs.yml"
plugins:
  - search
  - plantuml:
      puml_url: https://www.plantuml.com/plantuml/
```

3\. Добавьте в md-файл код plantUML-диаграммы, в блоке кода диаграммы укажите `puml`:

<pre><code>
&#96;&#96;&#96;puml
@startuml
@enduml
&#96;&#96;&#96;</code></pre>

**Результат**: при сборке проекта по тегу на страницу подтянется сгенерированная документация.