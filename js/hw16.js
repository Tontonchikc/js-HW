const mangoAccount = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mangoAccount.getInfo();

const polyAccount = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

polyAccount.getInfo();

const mangoUser = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mangoUser.getInfo();

const polyUser = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

polyUser.getInfo();

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

console.log(storage.getItems());

storage.addItem("Дроїд");
console.log(storage.items);

storage.removeItem("Пролонгер");
console.log(storage.items);

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
