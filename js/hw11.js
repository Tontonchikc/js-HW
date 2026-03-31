const bankAccount = {
    ownerName: "Sam",
    accountNumber: 467,
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
        alert(`Рахунок поповнено на ${amount} грн. Баланс: ${this.balance} грн`);
    },

    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            alert(`Операція успішна.Ваш баланс: ${this.balance}`);
        } else {
            alert(
                `Введено суму яка перевишає ваш баланс.Ваш балланс: ${this.balance}`,
            );
        }
    },
};

alert(`Ваш баланс: ${bankAccount.balance}`);

const choise = confirm(
    "Натисніть 'ОК' якщо хочете додати кошти на баланс,або 'Cancel' - якщо хочете зняти кошти з балансу",
);
const amount = Number(prompt("Введіть суму:"));

if (isNaN(amount) || amount <= 0) {
    alert("Сума введена не корректно");
} else {
    if (choise) {
        bankAccount.deposit(amount);
    } else {
        bankAccount.withdraw(amount);
    }
}










const weather = {
  temperature: Number(prompt("Введіть вашу температуру")),
  humidity: 20,
  windSpeed: 16,

  weatherTemperature() {

    if (isNaN(this.temperature)) {
      alert("Ви ввели не число!");
      return null;
    }

    if (this.temperature < 0) {
      alert("Температура нижче 0");
      return true;
    } else {
      alert("Температура вище або дорівнює 0");
      return false;
    }
  }
};


const result = weather.weatherTemperature();

console.log("Результат:", result);