# Работа с DOM

## Получение ссылки на элемент
```javascript
const el = document.querySelector(".className");
const elts = document.querySelectorAll(".gray");
```

## Добавление содержимого в элемент

```javascript
const wrapper = document.querySelector("#wrapper");

wrapper.innerHTML = "<input type='text' name='' />";
```

## Навешивание и снятие обработчика

```javascript
const wrapper = document.querySelector("#wrapper");
wrapper.innerHTML = "<input type='text' name='myInput' id='i100' />";

const input = document.querySelector('#i100');

const handler = (e) => {
  console.log(input.value);
};

input.addEventListener('input', handler);
// ...
input.removeEventListener('input', handler);
```
