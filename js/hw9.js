function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(["Mango", "Kivi", "Ball"]);

let sum = 0;

function calculateEngravingPrice(message, pricePerLetter) {
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== " ") {
      sum += pricePerLetter;
    }
  }

  return sum;
}

console.log(calculateEngravingPrice("Anton Sasha Misha", 5));

function findLongestWord(words) {
  const wordsArray = words.split(" ");
  let longestWord = "";

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("String Number Boolean"));

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

console.log(formatString("Hello my names Anton,I am from Kiyv bla bla bla"));






function checkForSpam(message) {

  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}


console.log(checkForSpam("this is SPAM message,i want SaLe")); 





const numbers = [];
let input;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) {

    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, попробуйте ще раз");
    continue; 
  }

  numbers.push(number); 
}


if (numbers.length > 0) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив чисел порожній");
}