Link de codesandbox:
https://codesandbox.io/p/devbox/lab08-fhn2vx

Para correr el programa hay que abrir la terminal dentro de la carpeta labexpr, y correr el siguiente comando:
node ./src/main.js

Despues en la aplicacion de Postman se va a inicia un nuevo HTTP y ahi se coloca los siguientes links:

Para el GET: http://localhost:3000/books
Para el GET con id: http://localhost:3000/books/(numero del id)
Para el POST con id: http://localhost:3000/books
y en el body, seleccionar raw, tipo de archivo JSON y colocar los datos del libro, ejemplo:
{
  "title": "El señor de los anillos",
  "author": "J.R.R. Tolkien",
  "genre": "Fantasía"
}
Para el PUT: http://localhost:3000/books/(numero del id)
y en el body, seleccionar raw, tipo de archivo JSON y colocar los datos del libro, ejemplo:
{
  "title": "El señor de los anillos",
  "author": "J.R.R. Tolkien",
  "genre": "Fantasía"
}
Para el DELETE: http://localhost:3000/books/(numero del id)