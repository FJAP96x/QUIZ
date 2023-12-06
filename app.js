let total = 0;
const correctas = ["Roma", "Oslo", "Lima", "Estocolmo", "Ottawa"];

const Aciertos = document.getElementById("Aciertos");
const boton = document.getElementById("correctas");


boton.addEventListener("click", function () {
  let opciones = document.querySelectorAll("input:checked");
  let opcionsel = [...opciones].map((opcion) => opcion.value);
  for (let i = 0; i < opciones.length; i++) {
    if (correctas[i] === opcionsel[i]) {
    total++;
    }
  }
  Aciertos.innerHTML = "Aciertos: " + total;
});