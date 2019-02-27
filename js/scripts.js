// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    //Eliminando Nodos

    //Con querySelect
    var primerPost = document.querySelector('main article');
    primerPost.parentNode.removeChild(primerPost);
    
    //Con querySelectAll
    var enlaces = document.querySelectorAll('#navegacion nav ul li a')[10];
    enlaces.parentNode.removeChild(enlaces);

  });
  
})();

 