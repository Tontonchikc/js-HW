
const input = document.getElementById("inputText");
const button = document.getElementById("myButton");

button.textContent = input.value;


const image = document.getElementById("myImage");

image.src =
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg";


const link = document.getElementById("myLink");
const linkImage = document.getElementById("linkImage");

link.href = "https://youtube.com";

linkImage.alt = "Красиве зображення природи";


const firstItem = document.querySelector("#myList li");

firstItem.textContent = "Новий текст елемента списку";
