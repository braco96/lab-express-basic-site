// Importamos el paquete express para crear el servidor
const express = require('express');

// Inicializamos la aplicación de Express
const app = express();

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  // Enviamos el archivo home.html ubicado en la carpeta views
  res.sendFile(__dirname + '/views/home.html');
});

// Ruta para la página "Sobre Ada"
app.get('/about', (req, res) => {
  // Enviamos el archivo about.html con información biográfica
  res.sendFile(__dirname + '/views/about.html');
});

// Ruta para la página de trabajos
app.get('/works', (req, res) => {
  // Enviamos el archivo works.html que lista aportes relevantes
  res.sendFile(__dirname + '/views/works.html');
});

// Ruta para la galería de imágenes
app.get('/gallery', (req, res) => {
  // Enviamos el archivo gallery.html con imágenes estáticas
  res.sendFile(__dirname + '/views/gallery.html');
});

// Definimos el puerto en el que escuchará la aplicación
const PORT = 3000;
// Arrancamos el servidor y mostramos un mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});