/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let quienes = ["Mi celular", "Mi televisor", "Facebook", "Mi vecino"];
let que = [
  "Timbra",
  " Trasmite Mi programa Favorito",
  "Me alerto",
  "Es muy ruidoso"
];
let cuando = [
  "Continuamente",
  "En las noches",
  "Repetidamente",
  "Cuando toca el pito de su carro"
];
let evitare = [
  "Por lo que lo silenciare",
  "Por lo que estudiare la mañana",
  "Eliminare las notificaciones",
  "Sere tolerante con mi vecino"
];

function excuse_Generator(quienes, que, cuando, evitare) {
  let numQuien = Math.floor(Math.random() * quienes.length);
  let numQue = Math.floor(Math.random() * que.length);
  let numCuando = Math.floor(Math.random() * cuando.length);
  let num_evitar = Math.floor(Math.random() * evitare.length);
  return quienes[numQuien] + " " + que[numQue] + " " + cuando[numCuando];
  evitare[numCuando];
}

function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuse_Generator(quienes, que, cuando, evitare);
}
window.onload = onLoad;
