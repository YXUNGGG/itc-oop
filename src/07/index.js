// 1. Допишите конструктор
// 2. Напишите метод toString
//   * метод должен возвращать строку "шесть", если число делится на шесть
//   * метод должен возвращать строку "три", если число делится на три и не делится на два
//   * метод должен возвращать строку "два", если число четное и не делится на три
//   * во всех остальных случаях метод возвращает "один"
//
//  Примеры:
//    (new Presentation(1)).toString() // => один
//    (new Presentation(3)).toString() // => три
//    (new Presentation(2)).toString() // => два
//    (new Presentation(6)).toString() // => шесть
//    (new Presentation(12)).toString() // => шесть
//    (new Presentation(5)).toString() // => один
//    (new Presentation(7)).toString() // => один
//
class Presentation {
  constructor(number) {
    this.number = number;
  }

  toString() {
    if (this.number % 6 == 0) return "шесть";
    if (this.number % 3 == 0 && this.number % 2 != 0) return "три";
    if (this.number % 2 == 0) return "два";
    else return "один";
  }
}
// 3. Допишите конструктор
// 4. Напишите метод add, метод должен принимать число
// 5. Напишите метод size, метод должен возвращать число добавленных чисел
// 6. Напишите метод toString
//
//  Примеры:
//    const l1 = new PresentationList;
//    l1.toString(); // => ""
//
//    const l2 = new PresentationList;
//    l2.add(1);
//    l2.add(2);
//    l2.add(12);
//    l2.toString(); // => "один, два, шесть"
//
class PresentationList {
  constructor() {
    this.arr = [];
  }

  add(number) {
    this.arr.push(new Presentation(number));
  }

  size() {
    return this.arr.length;
  }

  toString() {
    return this.arr.map(p => p.toString()).join(", ");
  }
}
