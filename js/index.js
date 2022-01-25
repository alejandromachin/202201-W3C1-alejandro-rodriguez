// import { Luchador, daenerys, jaime } from "./Luchador.js";
// import { bronn } from "./Escudero.js";
// import { tyrion } from "./Asesor.js";
// import { joffrey } from "./Rey.js";
// import Personaje from "./Personaje.js";
import CardComponent from "./componentes/CardComponent.js";

const container = document.querySelector(".card-container");
const newCard = new CardComponent(container, "card character__card");
