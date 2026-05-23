const categories = document.querySelectorAll("#categories .item");

console.log(`У списку ${categories.length} категорії.`);

categories.forEach((cat) => {
  const title = cat.querySelector("h2").textContent;
  const itemsCount = cat.querySelectorAll("ul li").length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ulIngredients = document.querySelector("#ingredients");

const liElements = ingredients.map((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  return li;
});

ulIngredients.append(...liElements);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");

const galleryMarkup = images
  .map((img) => `<li><img src="${img.url}" alt="${img.alt}" width="200"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.style.display = "flex";
gallery.style.gap = "10px";
gallery.style.listStyle = "none";

let counterValue = 0;

const valueSpan = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const increment = () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
