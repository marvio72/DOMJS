// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    var logo = document.querySelector('#logo');
    console.log(logo);

    var encabezado = document.querySelector('aside h2');
    console.log(encabezado);

    var todoEncabezado = document.querySelectorAll('h2');
    console.log(todoEncabezado[0].innerText);

    var encabezadoParrafo = document.querySelectorAll('h2, footer p');
    console.log(encabezadoParrafo);

    var enlaces = document.querySelectorAll('a');
    enlaces[0].setAttribute('href','http://www.youtube.com');

    var nombreEnlaces = document.querySelectorAll('a');
    console.log(nombreEnlaces);

    for (let i = 0; i < nombreEnlaces.length; i++) {
      console.log(nombreEnlaces[i].innerText);
    }

  });
  
})();

