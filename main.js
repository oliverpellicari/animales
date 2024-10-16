// Selección del formulario y la lista de animales
const animalForm = document.getElementById('animalForm');
const animalList = document.getElementById('animalList');

// Array para almacenar los animales registrados
let animalesRegistrados = [];

// Escuchar el evento submit del formulario
animalForm.addEventListener('submit', function (event) {
  event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const tipo = document.getElementById('tipo').value;
  const nacimiento = document.getElementById('nacimiento').value;

  // Crear un nuevo objeto Animal usando la clase definida en animal.js
  const nuevoAnimal = new Animal(nombre, tipo, nacimiento);

  // Añadir el animal al array
  animalesRegistrados.push(nuevoAnimal);

  // Crear un botón para visualizar el animal registrado
  const botonVisualizar = document.createElement('button');
  botonVisualizar.textContent = nombre;  // El texto del botón será el nombre del animal
  botonVisualizar.addEventListener('click', function () {
    // Al hacer clic, se mostrarán los datos del animal
    alert(nuevoAnimal.visualizar());
  });

  // Añadir el botón a la lista de animales registrados en la página
  animalList.appendChild(botonVisualizar);

  // Limpiar el formulario
  animalForm.reset();
});
