function Nombre(idioma, name) {
    let saludo;
    if (idioma == 'Español')
      saludo="hola " + name;
    else{
      saludo= "hello " + name;
    }
    return saludo;
  }
  
  function Genero(idioma,genero){
    let saludo;
    if (idioma == 'Español')
      saludo = " de genero " + genero;
    else{
      saludo= " gender " + genero;
    }
    return saludo;
  }
  
  function Edad(idioma,age){
    let saludo;
    if (idioma == 'Español')
      saludo = " con edad de " + age + "años";
    else{
      saludo= " with age " + age + "years old";
    }
    return saludo;
  }
   
  function Saludo(firstDates, secondDates, ageDate, idioma){
    let saludo = Nombre(idioma, firstDates) + Genero(idioma,secondDates) + Edad(idioma,ageDate);
    return saludo;
  }

  export default Saludo;