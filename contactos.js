// Crear una lista de contactos con datos predefinidos
let listaContactos = ["Juan Perez", "Maria Lopez", "Pedro Ramirez"];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreCompleto) {
  listaContactos.push(nombreCompleto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreCompleto) {
  let indice = listaContactos.indexOf(nombreCompleto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

// Función para imprimir los contactos en la consola
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i]);
  }
}

console.log("Contactos iniciales:");
imprimirContactos();

console.log("\nAgregando nuevo contacto...");
agregarContacto("Ana Gomez");

console.log("\nLista de contactos después de agregar:");
imprimirContactos();

console.log("\nBorrando contacto...");
borrarContacto("Maria Lopez");

console.log("\nLista de contactos después de borrar:");
imprimirContactos();


