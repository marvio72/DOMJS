// Muy importante tener esta estructura para que lea todo el codigo
// html y esto hace que el codigo javascript funcione una vez que 
// cargue el codigo html

// Estructura necesaria
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  
    //Crear contenido


    var sidebar = document.querySelector('#sidebar');
    var nuevoElemento = document.createElement("H1");
    var nuevoContenido = document.createTextNode("Hola Mundo");
    nuevoElemento.appendChild(nuevoContenido);
    sidebar.appendChild(nuevoElemento);
    
    //Agregar entrada 6 en sidebar

    var enlacesSidebar = document.querySelectorAll('#sidebar ul');
    //Creando el enlace
    var nuevoEnlace = document.createElement('A');
    //Agregamos atributo al Enlace.
    nuevoEnlace.setAttribute('href','#');
    var textoEnlace = document.createTextNode('Entrada 6');
    nuevoEnlace.appendChild(textoEnlace);
    //Crear la lista
    var nuevaLista = document.createElement('LI');
    nuevaLista.appendChild(nuevoEnlace);
    //Lo agregamos al menu
    enlacesSidebar[0].appendChild(nuevaLista);
    //por ser un arreglo al crear enlacesSidebar, tenemos que indicarle mediante
    //indice para poder declararlo y asi agregar el contenido de nuevaLista.

    
  });
  
})();

