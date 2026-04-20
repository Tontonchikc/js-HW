const user = {
  name: "Anton",
  age: 16,
  hobby: "gaming",
};

function countProps(obj) {
  const { keys } = Object;
  return keys(obj).length;
}

console.log(countProps(user));


const employees = {
  Anton: 10,
  Oleg: 15,
  Maria: 8
};

function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestName = name;
    }
  }

  return bestName;
}

console.log(findBestEmployee(employees)); 




const salaries = {
  Anton: 1000,
  Oleg: 1500,
  Maria: 1200
};

function countTotalSalary(employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }

  return total;
}

console.log(countTotalSalary(salaries)); 



const products1 = [
  { name: "apple", price: 100 },
  { name: "banana", price: 50 },
  { name: "orange", price: 80 }
];

function getAllPropValues(arr, prop) {
  const result = [];

  for (const item of arr) {
    const { [prop]: value } = item;

    if (value !== undefined) {
      result.push(value);
    }
  }

  return result;
}

console.log(getAllPropValues(products1, "name"));  
console.log(getAllPropValues(products1, "price")); 




const products2 = [
  { name: "apple", price: 100, quantity: 2 },
  { name: "banana", price: 50, quantity: 5 },
  { name: "orange", price: 80, quantity: 3 }
];

function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      total += price * quantity;
    }
  }

  return total;
}

console.log(calculateTotalPrice(products2, "apple")); 
console.log(calculateTotalPrice(products2, "banana")); 
console.log(calculateTotalPrice(products2, "orange")); 






const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],


  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },


  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів!");
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },


  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      const { id: transactionId } = transaction;

      if (transactionId === id) {
        return transaction;
      }
    }

    return null;
  },


  getTransactionTotal(type) {
    let total = 0;

    for (const { type: t, amount } of this.transactions) {
      if (t === type) {
        total += amount;
      }
    }

    return total;
  },
};


account.deposit(1000);
account.deposit(500);
account.withdraw(300);

console.log("Баланс:", account.getBalance()); // 1200

console.log("Транзакція 2:", account.getTransactionDetails(2));

console.log(
  "Усі поповнення:",
  account.getTransactionTotal(Transaction.DEPOSIT),
);

console.log("Усі зняття:", account.getTransactionTotal(Transaction.WITHDRAW));
