/*
En el contexto de SPA y rutas, un route handler es una función que se 
ejecuta cuando la app detecta que la URL cambió a cierta ruta. Su trabajo 
es mostrar la "escena" o "pantalla" correspondiente a esa ruta.

Por ejemplo, si tenés una SPA con rutas /home y /about, el route handler 
para /home va a mostrar el contenido de inicio, y el de /about la info de
 "Acerca de".
 
*/

/* Para poder gestionar cada ruta y asociarla con cada funcion
y cada funcion tendra su propio componenete, camos a hacer esta funcion 
sea un array de objetos de path*/

export function arrayPath(route) {
const contenido = document.querySelector(".contenedor")


  const arrayRutas = [

    {
      path: /\/url1/,
      //esta regular expression le dice que si esta esto sea true
      hundler: () => {
        contenido.textContent = "aqui esta la url numero 1"

        console.log("ruta1");
      },
    },
    {
      path: /\/url2/,
      hundler: () => {
        contenido.textContent = "que viva la 2"

        console.log("ruta2");
      },
    },
    {
        //utilizamos regular expression para poder darle un patron 
        // de busqueda de un string 
        // y ver si cumple la condicion , se puede utilizar otra cosa a parte de la regular
        //expression
      path: /\/url3\/./,
      hundler: () => {
        contenido.textContent = "al final la 3"

        console.log("ruta3");
      },
    },
  ];

  /*
  Aqui vamos a iterar las rutas y si la ruta que me pasa por parametro
   en 
  la funcion arrayRutas , si este es igual a la ruta dentro del array entonces
  ejecutamos la funcion dentro del objeto
  */

  /*utiliazando regular expression le decimios si la ruta que nos trae 
  cumple con las condiciones si es verdad se ejecuta la funccion 
  en la ruta 3 tambien evalua cualquier subruta */

  for (const x of arrayRutas) {
    if (x.path.test(route)) {
        console.log('ruta encontradoa',  x);
        
      x.hundler();
    }
  }
}
