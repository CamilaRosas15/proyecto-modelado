import {Nombre, Genero} from "./sumador";

const name = document.querySelector("#nombre");
const orientacion = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstDates = String(name.value);
  const secondDates = String(orientacion.value);
  div.innerHTML = "<p>" + Nombre(firstDates) + Genero(secondDates) + "</p>";


  

});
