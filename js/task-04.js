const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
const decBtn = counter.querySelector(`[data-action="decrement"]`);
const incBtn = counter.querySelector(`[data-action="increment"]`);
let counterValue = 0;
incBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
decBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
