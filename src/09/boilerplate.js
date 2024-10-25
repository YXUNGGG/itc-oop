// Этот код не трогаем, он просто проверяет, что все будет работать
//
const root = document.querySelector("#root");

const name = new TextInput("name", "Сидор", "Имя");
const lastName = new TextInput("last", "Петров", "Фамилия");
const patronymic = new TextInput("patronymic", "Васильевич", "Отчество");
const patrAbs = new CheckboxInput("no_patronymic", false, "нет отчества");

const msg = document.querySelector("#message");
const dc = new DataContainer;
const up = dc.getUpdater();
const fn = (name, value) => {
  up(name, value);
  msg.innerHTML = JSON.stringify(dc.getData(), null, 2);
}

[name, lastName, patronymic, patrAbs].forEach((c) => {
  c.render(root);
  c.subscribe(fn);
});

