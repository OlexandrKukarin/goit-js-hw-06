const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleSearch);
function handleSearch(e) {
  const trimed = e.currentTarget.value.trim();
  if (trimed.length === Number(input.dataset.length)) {
    validation(input, "valid", "invalid");
  } else {
    validation(input, "invalid", "valid");
  }
}
function validation(elements, addClass, removeClas) {
  elements.classList.add(addClass);
  elements.classList.remove(removeClas);
}
