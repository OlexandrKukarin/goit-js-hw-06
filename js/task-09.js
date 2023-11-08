const changer = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;
changer.addEventListener("click", handleClick);
function handleClick() {
  colorSpan.textContent = getRandomHexColor();
  body.style.backgroundColor = colorSpan.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
