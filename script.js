// 1. Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.
//
class Room {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
const room = new Room(4, 9);
console.log(room.getArea());

// 2. Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств
//
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    return this.num1 + this.num2;
  }
  mul() {
    return this.num1 * this.num2;
  }
}
const calc = new Calculator(4, 9);
console.log(calc.sum());
console.log(calc.mul());

// 3. Реализовать мини-приложение
class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }
  init() {
    const img = document.createElement("img");
    img.setAttribute("src", this.imgUrl);
    this.html = document.querySelector("html");
    this.html.append(img);
    this.html.style.backgroundColor = "black";
    this.render();
  }
  render() {
    this.html.style.position = "fixed";
    this.html.style.top = this.top + "px";
    this.html.style.left = this.left + "px";
    this.html.style.width = this.width + "px";
  }
  moveUp() {
    this.top -= 20;
    this.render();
  }
  moveDown() {
    this.top += 20;
    this.render();
  }
  moveLeft() {
    this.left -= 20;
    this.render();
  }
  moveRight() {
    this.left += 20;
    this.render();
  }
}
const imgUrl = "https://bit.ly/2tcDito";
const mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveUp();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveRight();
mfLogotip.moveDown();

class Circle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.top = 0;
    this.left = 0;
  }
  render() {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.zIndex = "-1";
    div.style.top = this.top + "px";
    div.style.left = this.left + "px";
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
    div.style.borderRadius = "50%";
    this.html = document.querySelector("html");
    this.html.append(div);
  }
}

const circle = new Circle(100, 100, "green");
circle.render();
