DESCRIPCION
este es un sistema de ventas diseñado para gestionar productos
de un usuario que esta logeado o que inicio secion
controla tambien las ventas , sumando los precios


ACERCA DEL SISTEMA
primero para iniciar la app en el cmd de tu preferecia  (npm run dev)

este sistema esta hecho con las siguientes tecnologias
(por ahora esta solo el backend)

*node.js
*express
*mongoDB (atlas)
*javaScript

  --> ACERCA DE LA BASE DE DATOS

  la base de datos como se menciona esta en mongoDB atlas cuenta con las siguientes tablas
  *user
  *procut
  *venta
  *category

  

  -->ESPECIFICAIONES DE LA AUNTENTIFICACION

  si estas interesado en probar el sistema purdes hacerlo con postman ,thunderclient
  o cualquier  herramienta para probar APIs 

en este caso para la autentificacion con el siguiente enlace 

* http://localhost:4000/api/login  (con el metodo POST)

* {
  
  "username":"gus1",
  "password":"123456"
}


ya con eso estas dentro de la app para ver todas las ventas productos y categorias que solo tiene acceso un usuario especifico

PARA VER EL PERFIL

*http://localhost:4000/api/profile (metodo GET)
(lo mismo seria para ventas, productos y categorias) => /ventas    /products   /categories


PARA CREAR UNA VENTA 
*http://localhost:4000/api/createVenta (CON EL METODO POST)

{
 "products": [
   {
    "product": "677d6c253e391e9506d2bafd",
      "quantity": 2
    },
    {
      "product": "677df0a41cfa3d122b63a017",
      "quantity": 1
    }
  ]
}

como se ve la seccion de ventas solo recibe los IDs de cada producto y la cantidad de cada producto 
y se suman si hay mas productos implicados en una venta




  
