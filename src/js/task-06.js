const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleSearch);
function handleSearch(e) {
  const trimed = e.currentTarget.value.trim();
  if (trimed.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  //   console.log(e);
}
