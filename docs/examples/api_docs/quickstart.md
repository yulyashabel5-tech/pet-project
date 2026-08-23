---
tags:
  - api
---

# Быстрый старт

Выполните тестовый запрос к API для проверки его работоспособности. Для этого используйте тестовый сервер `https://api.documentat.io/api/dev`.

## 1. Получите токен

Для работы с API нужен токен доступа. Он передаётся в заголовке `Token` каждого запроса. Подробнее в разделе «Аутентификация».

## 2. Отправьте запрос 

Запрос можно отправить через:

* терминал (Windows PowerShell / CMD, macOS Terminal, Linux Bash) с помощью утилиты `curl`;

* HTTP‑клиент (Postman, Bruno, Insomnia, HTTPie).

Отправьте `GET`-запрос через `curl` на получение списка пользователей. 

```bash title="Пример запроса"
curl -X 'GET' \
  'https://api.documentat.io/api/dev/users?limit=1' \
  -H 'accept: application/json' \
  -H 'Token: ВАШ_ТОКЕН'
```
### 3. Получите ответ

Успешный ответ — код 200 и массив объектов (может быть пустым, если `limit` имеет значение 0).

```http title="Пример успешного ответа"
HTTP/1.1 200 OK
content-length: 236
content-type: application/json
date: Sun, 23 Aug 2026 18:08:24 GMT
server: nginx/1.26.0

[
  {
    "id": 1167,
    "username": "Yuliya",
    "email": "yuliya@gmail.com",
    "firstName": "string",
    "lastName": "string",
    "age": 15,
    "isEmployee": true,
    "accountStatus": "active",
    "address": {
      "country": "string",
      "city": "string",
      "street": "string",
      "house": "string"
    }
  }
]
```    

