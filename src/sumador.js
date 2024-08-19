function Nombre(name)
{
    return "Hola " + name;
}

function Genero(genero)
{
    return " de genero " + genero;
}

function Edad(age)
{
    return " con edad de " + age;
}

function SaludoEspanol(firstDates, secondDates, ageDate){
    let saludo = Nombre(firstDates) + Genero(secondDates) + Edad(ageDate);
    return saludo;
  }
  
export {Nombre,Genero,Edad,SaludoEspanol};
