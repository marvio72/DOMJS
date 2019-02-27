// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    var enlaces = document.querySelectorAll('#menu ul li a')[0];
    console.log(enlaces.nodeType);
    /* consultar https://developer.mozilla.org/es/docs/Web/API/Node/nodeType*/
    console.log(enlaces.nodeName);
    console.log(enlaces.attributes);
    console.log(enlaces.firstChild);
    console.log(enlaces.firstChild.nodeValue);

    enlaces.firstChild.nodeValue = "Home";
    enlaces.id = "mi_id";


  });
  
})();

