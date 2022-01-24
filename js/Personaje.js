import { daenerys, jaime } from "./Luchador.js";
import { bronn } from "./Escudero.js";
import { tyrion } from "./Asesor.js";
import { joffrey } from "./Rey.js";

export default class Personaje {
  element;
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(
    nombrePersonaje,
    familiaPersonaje,
    edadPersonaje,

    className,
    parentElement
  ) {
    this.element = document.createElement("div");
    this.element.classList = className;
    parentElement.append(this.element);

    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <img src="${this.nombrePersonaje}.jpg alt="${this.nombrePersonaje} y ${this.familiaPersonaje}" class="character__picture card-img-top">
    <div class="card-body">
    <h2 class="character__name card-tittle h4">${this.nombrePersonaje} ${this.familiaPersonaje}</h2>
    <div class="character__info">
    <ul class="list-unstyled">
    <li>Edad ${this.edadPersonaje} años</li>
    <i>Estado: <i class="fas fa-thumbs-down"><i>
    <i>Estado: <i class="fas fa-thumbs-up"><i>
    </li></ul></div>
    <div class="character__overlay">
    <div class="character__actions">
    <button class="character__action btn">habla</button>
    <button class="character__action btn">muere</button>
    </div>
    </div>
    </div>
    <i class="emoji"></i>
    </div>
    </li>

    `;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}
const personajesGoT = [jaime, daenerys, bronn, tyrion, joffrey];

const prueba = new Personaje(
  "alejandro",
  "rodriguez",
  31,
  "card character__card",
  "card-container"
);
