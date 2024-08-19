import Saludo from "./sumador";

const name = document.querySelector("#nombre");
const orientacion = document.querySelector("#genero");
const age = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstDates = String(name.value);
  const secondDates = String(orientacion.value);
  const ageDate = Number.parseInt(age.value);
  const lenguaje = String(idioma.value);
  div.innerHTML = "<p>" + Saludo(firstDates,secondDates,ageDate,lenguaje) + "</p>";

});
