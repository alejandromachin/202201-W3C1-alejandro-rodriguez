import { Luchador, daenerys, jaime } from "./Luchador.js";
import { bronn } from "./Escudero.js";
import { tyrion } from "./Asesor.js";
import { joffrey } from "./Rey.js";
// import Personaje from "./Personaje.js";
import Component from "./componentes/Component.js";
import CardComponent from "./componentes/CardComponent.js";
import CardLuchador from "./componentes/CardLuchador.js";

const container = document.querySelector(".characters-list");

const personajes = [joffrey, bronn, tyrion, daenerys, jaime];

console.log(joffrey);
console.log(personajes);

for (let i = 0; i < personajes.length; i++) {
  const lista = new Component(container, "character col", "li").element;

  const personaje = new CardComponent(
    lista,
    "card character__card",
    personajes[i].nombre,
    personajes[i].familia,
    personajes[i].edad,
    personajes[i]
  );
}
