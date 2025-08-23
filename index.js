import { goTo } from "./funtionPath.js";
import { arrayPath } from "./handleRouter.js";

(function () {


/*
Para poder utilizar una SPA(single pages aplication) y no recargar cada vez quese interactua con la pagina, necesitamos crear una funcion para que pueda dirigir la URL "imaginaria" a cada bloque de codigo*/

// cada boton llamara a cada blo que codigo, empezamos buscando cada uno
  const botonPalabra = document.querySelector(".botonPalabra");
  const botonLetra = document.querySelector(".botonLetra");
  const botonFrase = document.querySelector(".botonFrase");




/* 
ahora escuchamos el envento de clik y pasamos en funcion la url de cada uno , vamos a crear la funcion en otro archivo para separar responsavilidades
*/


  botonPalabra.addEventListener("click", () => {
    //invocamos la funcion goTo pa traer los elementos 
    //segun el url
    goTo("/url1")
    console.log("le dio clik a la palabra");

  });
  
  botonLetra.addEventListener("click", () => {
    goTo("/url2")
    console.log("le dio clik a la letra");
  });

  botonFrase.addEventListener("click", () => {
    goTo("/url3/prueba")

    console.log("le dio clik a la frase");
  });

  // esta funcion dice: escucho toda la ventana del navegador
  //y le paso por parametro a la funcion arrayPath lo que tenga en 
  // la ruta de mi ventana actual, como en la primera carga o en la recarga
  // no se ha hecho clink en ningun. boton necestias esta funcion para 
  //ir al la ruta de inicio o para ir a donde te quedaste
window.addEventListener("load",()=>{
arrayPath(location.pathname)
})
  // esto hace que cuando pulses el boton adelantar y retroceder en tu navegador recupere el path y se vea en pantalla
window.addEventListener("popstate", () => {
  arrayPath(location.pathname);
});


})();
