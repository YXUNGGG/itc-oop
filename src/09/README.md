# Работа с DOM, 2

## Новые методы для работы с DOM
```javascript
const root = document.querySelector("#root");

const input = document.createElement("input");
input.setAttribute("name", "color");
input.setAttribute("type", "text");

root.appendChild(input);
```

## Удаление элемента из родительского контейнера
(не сегодня)

```javascript
// Выглядит криво, к счастью, теперь можно проще
input.parentElement.removeChild(input);

// Как-то так
input.remove();
```

## Наследование в javascript

```javascript
class BaseClass {
  constructor(name) {
    this.name = name;
  }
}

class ChildClass extends BaseClass {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  hello() {
    console.log("Hello, I am " + this.name);
  }
}
```

## План на сегодня

 * npm update
 * npm run update
 * Открываем 09/index.html в браузере
 * Открываем 09/index.js в редакторе и пытаемся дописать классы
