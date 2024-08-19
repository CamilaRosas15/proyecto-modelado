import {Nombre, Genero,Edad,SaludoEspanol} from "./sumador";

const name = document.querySelector("#nombre");
const orientacion = document.querySelector("#genero");
const age = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstDates = String(name.value);
  const secondDates = String(orientacion.value);
  const ageDate = Number.parseInt(age.value);
  div.innerHTML = "<p>" + SaludoEspanol(firstDates,secondDates,ageDate) + "</p>";

});
