const edadUsuario = 15;

if (edadUsuario >= 18) {
  console.log("¡Puedes registrarte en el torneo de mayores!");
} else if (edadUsuario >= 13) {
  console.log("¡Bienvenido a la categoría Juvenil!");
} else {
  console.log("Lo siento, necesitas ser mayor de 13 años.");
}