// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
     var navegacion = document.getElementsByClassName('navegacion');
     console.log(navegacion[0]);

     var contenido = document.getElementsByClassName('contenido');
     console.log(contenido[0]);
    
    //  Borra el contenido de div con clase contenido
    contenido[0].style.display = 'none';
    
  });
  
})();

//La diferencia de getelementsByClassName vs getElementbyId es que
// las clases pueden darnos mas de un resultado.
//Recordemos que el id es unico por documento.