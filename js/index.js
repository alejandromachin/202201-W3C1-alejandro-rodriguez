import { Luchador, daenerys, jaime } from "./Luchador.js";
import { bronn } from "./Escudero.js";
import { tyrion } from "./Asesor.js";
import { joffrey } from "./Rey.js";
// import Personaje from "./Personaje.js";
import Component from "./componentes/Component.js";
import CardComponent from "./componentes/CardComponent.js";
import CardLuchador from "./componentes/CardLuchador.js";
import ButtonComponent from "./componentes/ButtonComponent.js";
import ComunicationComponent from "./componentes/ComunicationComponent.js";

const container = document.querySelector(".characters-list");

const personajes = [joffrey, bronn, tyrion, daenerys, jaime];

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
  const characterOverlay = document.querySelectorAll(".character__actions")[i];

  const buttonHabla = new ButtonComponent(
    characterOverlay,
    "character__action btn",
    "Habla",
    () => {
      const saludo = new ComunicationComponent(
        document.body,
        "comunications on",
        personajes[i].nombre,
        personajes[i].familia
      );

      const saludoDesplegado = document.querySelector(".comunications");
      console.log(saludoDesplegado);
      saludoDesplegado.addEventListener("click", () => {
        console.log("hola");
      });
    }
  );
  const buttonMuere = new ButtonComponent(
    characterOverlay,
    "character__action btn",
    "Muere",
    () => {}
  );
}

// const characterOverlay = document.querySelectorAll(".character__actions");
// console.log(characterOverlay);
// for (let i = 0; i < characterOverlay.length; i++) {
//   const buttonHabla = new ButtonComponent(
//     characterOverlay[i],
//     "character__action btn",
//     "Habla",
//     () => {
//       const saludo = new ComunicationComponent(
//         document.body,
//         "comunications",
//         characterOverlay[i].nombre,
//         characterOverlay[i].familia
//       );
//     }
//   );

//   const buttonMuere = new ButtonComponent(
//     characterOverlay[i],
//     "character__action btn",
//     "Muere",
//     () => {}
//   );
// }
