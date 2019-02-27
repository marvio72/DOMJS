// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    //Reemplazando Elementos

    var viejoNodo = document.querySelector('main h2');
    var nuevoNodo = document.querySelector('footer h2');
    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

    //Reemplazar nodo con un nuevo Elemento
    var nuevoTitulo = document.createElement('H2');
    var nuevoTexto = document.createTextNode('Hola Mundo');
    nuevoTitulo.appendChild(nuevoTexto);

    var segundoNodo = document.querySelectorAll('main h2')[1];
    segundoNodo.parentElement.replaceChild(nuevoTitulo, segundoNodo);
  });
  
})();

 