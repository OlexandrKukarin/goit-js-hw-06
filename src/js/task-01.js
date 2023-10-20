const catigoriesList = document.querySelector("#categories");
const catigoriesItem = catigoriesList.querySelectorAll(".item");
console.log("Number of categories:", catigoriesItem.length);
catigoriesItem.forEach((item) => {
  const title = item.querySelector("h2");
  console.log("Category:", title.textContent);
  const liEl = item.querySelectorAll("li");
  console.log("Elements:", liEl.length);
});
