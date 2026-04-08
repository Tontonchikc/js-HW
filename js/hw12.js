const user = {
  name: "Anton",
  age: 16,
  hobby: "gaming",
  premium: true
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;








for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}



console.log(countProps(user));











const team = {
  Anton: 10,
  Oleg: 15,
  Maria: 8
};


function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const name of Object.keys(employees)) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestName = name;
    }
  }

  return bestName;
}

console.log(findBestEmployee(team));





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







const products = [
  { name: "apple", price: 100 },
  { name: "banana", price: 50 },
  { name: "orange", price: 80 }
];

function getAllPropValues(arr, prop) {
  const result = [];

  for (const item of arr) {
    if (prop in item) {
      result.push(item[prop]);
    }
  }

  return result;
}


console.log(getAllPropValues(products, "name"));  
console.log(getAllPropValues(products, "price"));





const products = [
  { name: "apple", price: 100, quantity: 2 },
  { name: "banana", price: 50, quantity: 5 },
  { name: "orange", price: 80, quantity: 3 }
];

function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total += product.price * product.quantity;
    }
  }

  return total;
}


console.log(calculateTotalPrice(products, "apple"));  
console.log(calculateTotalPrice(products, "banana")); 
console.log(calculateTotalPrice(products, "orange")); 