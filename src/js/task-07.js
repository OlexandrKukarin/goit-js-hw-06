const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", handleSearch);
function handleSearch(e) {
  const evtVal = e.target.value;
  text.style.fontSize = `${evtVal}px`;
}
