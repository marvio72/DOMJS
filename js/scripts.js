// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    //Clonar Nodo
    var contenido = document.querySelectorAll('main');
    var nuevoContenido = contenido[0].cloneNode(true);

    var sidebar = document.querySelector('aside');
    //Sacar el numero de nodos que contiene childNodes de aside
    //para asi poner el contenido en la ultima posicion
    var nodos = sidebar.childNodes.length;
    sidebar.insertBefore(nuevoContenido, sidebar.childNodes[nodos]);
  
    
  });
  
})();

 