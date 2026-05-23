

// 1
const button = document.querySelector("#myButton");
const input = document.querySelector("#textInput");

button.textContent = input.value;

// 2
const image = document.querySelector("#myImage");

image.src = "image2.jpg";

// 3
const link = document.querySelector("#myLink");
const photo = document.querySelector("#photo");

link.href = "https://youtube.com";

photo.alt = "Опис зображення";

// 4
const firstItem = document.querySelector("#myList li");

firstItem.textContent = "Новий текст";
