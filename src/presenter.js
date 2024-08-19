import Nombre from "./sumador";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstDates = String(name.value);
  div.innerHTML = "<p>" + Nombre(firstDates) + "</p>";  

});
