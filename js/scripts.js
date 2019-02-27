// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);

    // Agregar el atributo target="_blank" a todos los enlaces a
    for (let i = 0; i < enlaces.length; i++) {
      enlaces[i].setAttribute('target','_blank');
    }

    var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    console.log(enlacesSidebar);

    //Deseamos que todos los enlaces apunten a google.com

    for (let j = 0; j < enlacesSidebar.length; j++) {
      enlacesSidebar[j].setAttribute('href','http://www.google.com');
    }

  });
  
})();

