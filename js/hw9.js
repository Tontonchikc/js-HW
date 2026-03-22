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




let longestWord;

function findLongestWord(words) {
   let wordsArray = words.split
  for (let i = 0; i < wordsArray.lentgh; i++) {
    if(wordsArray[i].length > longestWord.length){
        longestWord = wordsArray[i]
    }
  }
  return longestWord
}

console.log(findLongestWord("String Number Boolean"));







function formatString(string) {
    if (string.length < 40) {
        console.log(string)
    }
    else { console.log(string.slice(39, 99999999999, "...")) }

}

formatString("Hello my names Anton,I am from Kiyv bla bla bla");






