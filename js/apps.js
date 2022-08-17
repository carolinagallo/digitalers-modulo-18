/*
Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  let mensaje = [];
  const nombre = document.querySelector("#nombre");
  const password = document.querySelector("#password").value;

  if (password.length < 12) {
    e.preventDefault();
    console.log("Debe tener mas de 12 caracteres");
  }

  const contieneEspacios = new RegExp(/\s/).test(password);
  if (contieneEspacios) {
    e.preventDefault();
    console.log("No debe contener espacios");
  }

  const contieneMayusculas = new RegExp(/[A-Z]/).test(password);
  if (!contieneMayusculas) {
    e.preventDefault();
    console.log("Debe contener al menos una mayuscula");
  }

  const contieneMinusculas = new RegExp(/[a-z]/).test(password);
  if (!contieneMinusculas) {
    e.preventDefault();
    console.log("Debe contener al menos una minuscula");
  }
});
