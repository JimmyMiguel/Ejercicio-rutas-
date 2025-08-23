import { arrayPath } from "./handleRouter.js";

export function goTo(path) {
  /*
Esta funcion tiene como objetivo que ingrese la ruta y ademas vamos
a utilizar el metodo history.pushState que ayuda a que guarde un historial
de la url para que refleje el estado actual de la app, eso tambien permita 
que pueda utilizar las flechas de adelante y atras el navegador
*/

  // tiene tres parametros , state que guarda el historial , por
  // eso es un objeto vacio. Titulo , que no se utiliza "" /
  //la nueva URL que se va a mostrar en al barra de de navegadores
  history.pushState({}, "", path);

  //en esta funcion es un array para elegir cual funcion ejecutar segun la ruta y se mostrara en pantalla
  arrayPath(path);
}

//ojo , debemos configurar el servidor para que cada vez que recargue
// , siempre se dirija a index.html con --entry-file=index.html, se deba hacer cada vez que se recargeo se inicie live-server
