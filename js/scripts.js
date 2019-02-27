// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    //Controlando Inseciones con insertBefore

    var sidebar = document.querySelector('aside');
    var masVisitados = document.createElement('H2');
    var textoVisitados = document.createTextNode('Post mas Visitados');
    masVisitados.appendChild(textoVisitados);
    sidebar.insertBefore(masVisitados,sidebar.childNodes[0]);
    
    var contenido = document.querySelectorAll('main h2');
    for (let i = 0; i < contenido.length; i++) {
      var nuevoElemento = document.createElement('LI');
      var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
      nuevoElemento.appendChild(nuevoTexto);
      sidebar.insertBefore(nuevoElemento,sidebar.childNodes[2]);
    }

  });
  
})();

 