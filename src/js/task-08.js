const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSearch);
function handleSearch(e) {
  e.preventDefault();
  const cT = e.currentTarget;

  if (
    cT.elements.email.value.trim() === "" ||
    cT.elements.password.value.trim() === ""
  ) {
    window.alert("Всі поля повинні бути заповнені");
  } else {
    const data = {};
    const formData = new FormData(cT);
    for (let [name, value] of formData) {
      data[name] = value;
    }
    console.log(data);
    form.reset();
  }
}
