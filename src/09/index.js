// 1. Напишите конструктор, который сохранит
//   переданный параметр, но таким образом, чтобы дальнейшие
//   изменения в объекте не повлияли на переданное значение
//
//  Пример:
//    const obj = { a: 31 };
//    const dc = new DataContainer(obj);
//    dc.data.a = 44;
//
//    console.log(obj.a) // => 31, исходный объект не меняется
//
// 2. Напишите метод getData, который просто вернет this.data,
//   чтобы не залезать внутрь объекта каждый раз
//
// 3. Напишите метод getUpdater
//   Этот метод не принимает никаких параметров.
//   Этот метод возвращает функцию, которая принимает два параметра: name и value
//   При вызове этой функции в this.data в ключ name должно записываться значение value
//
class DataContainer {
  constructor(data = {}) {
    this.data = { ...data };
  }

  getData() {
    return this.data;
  }

  getUpdater() {
    return (name, value) => {
      this.data[name] = value;
    }
  }
}

// 4. Допишите конструктор, сохраните входные параметры
//
class BaseInput {
  constructor(name, value = '', label = name) {
    this.name = name;
    this.value = value;
    this.label = label;
  }
}

// (Конструктор не пишем, он приходит от BaseInput)
//
// 5. Напишите метод render, который
//   * Создаст текстовый инпут и метку к нему
//   * Добавит их внутрь контейнера
//   * Сохранит ссылку на этот самый инпут, она понадобится
//
// 6. Напишите метод subscribe, который
//   * Для уже отрендеренного инпута создаст обработчик события
//    'input' и добавит этот обработчик этому инпуту
//   * Ссылку на обработчик сохраняем, понадобится
//   * Один раз вызываем обработчик, чтобы текущие значения
//     попали в сохраненные данные
//
class TextInput extends BaseInput {
  render(container) {
    //this.container = container;
    this.input = document.createElement("input");
    
    this.input.setAttribute("name", this.name);
    this.input.setAttribute("type", "text");
    this.input.setAttribute("value", this.value);
    this.input.setAttribute("label", this.label);

    container.appendChild(this.input);
  }

  subscribe(updater) {
    this.handler = () => updater(this.name, this.input.value);
    this.input.addEventListener("input", this.handler);
  }
}

// 7-8. Почти таким же образом пишем render и subscribe
//   для CheckboxInput, но есть пара отличий
//   * Значение this.value нельзя просто передать в input.value
//     * И в input.checked тоже нельзя
//     * Правильно будет выставить input.checked = 'checked' только в том случае, если this.value === true
//   * Считывать input.value тоже смысла нет -- он всегда будет возвращать одно и то же, нужно передавать input.checked
//   * Было еще одно отличие, про событие input и change, но, как оказалось, чекбокс нормально отрабатывает событие input
//
class CheckboxInput extends BaseInput {
  render(container) {
    const content = document.createElement("div");
    const labelOfInput = document.createElement("label");
    const checkboxInput = document.createElement("input");

    checkboxInput.name = this.name;
    checkboxInput.type = "checkbox";
    labelOfInput.textContent = this.label;
    this.value ? checkboxInput.checked = "Checked" : null;

    content.appendChild(labelOfInput);
    content.appendChild(checkboxInput);
    container.appendChild(content);

    this.input = checkboxInput;
  }

  subscribe(updater) {
    let handler = () => updater(this.name, this.input.checked);
    this.input.addEventListener("input", handler);
  }
}
