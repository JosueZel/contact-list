// Crear una lista de contactos con datos predefinidos
let listaContactos = [
    {
      id: 1,
      nombres: "Juan",
      apellidos: "Perez",
      telefono: "123456789",
      ubicaciones: {
        ciudad: "Los Angeles",
        direccion: "Dirección 1"
      }
    },
    {
      id: 2,
      nombres: "Maria",
      apellidos: "Lopez",
      telefono: "987654321",
      ubicaciones: {
        ciudad: "La Ceiba",
        direccion: "Dirección 2"
      }
    },
    {
      id: 3,
      nombres: "Pedro",
      apellidos: "Ramirez",
      telefono: "456789123",
      ubicaciones: {
        ciudad: "San Pedro Sula",
        direccion: "Dirección 3"
      }
    }
  ];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
}
listaContactos.push(contacto);

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
    let indice = listaContactos.findIndex(function(contacto) {return contacto.id === id; });
    if (indice !== -1) {
      listaContactos.splice(indice, 1);
    }
  }

// Función para imprimir los contactos en la consola
function imprimirContactos() {
    console.log("Lista de contactos:");
    for (let i = 0; i < listaContactos.length; i++) {
      let contacto = listaContactos[i];
      console.log(
        "ID:", contacto.id,
        "Nombre:", contacto.nombres,
        "Apellido:", contacto.apellidos,
        "Teléfono:", contacto.telefono,
        "Ciudad:", contacto.ubicaciones.ciudad,
        "Dirección:", contacto.ubicaciones.direccion
      );
    }
  }
imprimirContactos();



/*
Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección*/