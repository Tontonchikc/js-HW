const radios = document.querySelectorAll('input[name="color"]');

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.target.value || "незнайомець";
});

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  const inputLength = event.target.value.length;
  const requiredLength = Number(event.target.dataset.length);

  if (inputLength === requiredLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
