// 1. Сделайте, чтобы параметры конструктора
//   сохранялись как свойства name и color
// 2. Добавьте в класс функцию likes, которая
//   будет принимать другие объекты класса Cat
//   и возвращать true, если цвет котов совпадает
//
class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  likes(cat) {
    return this.color === cat.color;
  }
}

// 3. Сделайте, чтобы параметры конструктора
//   сохранялись как свойства x и y
// 4. Добавьте метод equals() который принимает
//   другую точку и возвращает true, если точки совпадают
// 5. Добавьте метод distance() который вернет расстояние
//   от точки до другой точки, которую передадут параметром
//
class Point2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }

  distance(point) {
    let delX = this.x - point.x;
    let delY = this.y - point.y;
    return Math.sqrt(delX ** 2 + delY ** 2);
  }
}

// Создайте класс TextInput, прикрепите его к другому html-файлу
//
// 6. Сделайте так, чтобы конструктор класса принимал строку-селектор
// 7. Добавьте метод create(), который создаст элемент страницы с тегом input и type="text", как дочерний элемент выбранного по селектору
// 8. Добавьте метод setValue(), который будет устанавливать значение этого элемента
//