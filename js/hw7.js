const friends = ["Mango", "Ajax", "Polly", "Kiwi"];

let myFriends = "";

for (let i = 0; i < friends.length; i++) {
  myFriends += friends[i];

  if (i < friends.length - 1) {
    myFriends += ",";
  }
}

console.log(myFriends);

const x = friends.join(",")
console.log(x);

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
cards.splice(2, 1);
cards.splice(2, 1, "card-6");

console.log(cards);