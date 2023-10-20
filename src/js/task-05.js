const inpName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");
inpName.addEventListener("input", handleSearch);
const space = "Anonymous";
outName.textContent = space;
function handleSearch(evt) {
  const outPut = evt.target.value;
  outName.textContent = outPut.trim() || space;
}
