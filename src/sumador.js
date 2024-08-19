function Nombre(idioma, name) {
    let saludo;
    if (idioma == 'Español')
      saludo="hola " + name;
    else{
      saludo= "hello " + name;
    }
    return saludo;
  }
  
  function Genero(genero){
    let saludo;
    if (idioma == 'Español')
      saludo = "de genero " + genero;
    else{
      saludo= " gender " + genero;
    }
    return saludo;
  }
  
  function Edad(age){
    let saludo;
    if (idioma == 'Español')
      saludo = " con edad de " + genero + "años";
    else{
      saludo= " with age " + genero + "years old";
    }
    return saludo;
  }
   
  function Saludo(firstDates, secondDates, ageDate, idioma){
    let saludo = Nombre(idioma, firstDates) + Genero(secondDates) + Edad(ageDate);
    return saludo;
  }