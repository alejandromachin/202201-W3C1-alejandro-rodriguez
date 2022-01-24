// import { daenerys, jaime } from "./Luchador.js";
// import { bronn } from "./Escudero.js";
// import { tyrion } from "./Asesor.js";
// import { joffrey } from "./Rey.js";

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
    this.generateHTML(nombrePersonaje, familiaPersonaje, edadPersonaje);
  }

  generateHTML(nombrePersonaje, familiaPersonaje, edadPersonaje) {
    this.element.innerHTML = `<img src="/img/${nombrePersonaje}.jpg" alt="${nombrePersonaje} y ${familiaPersonaje}" class="character__picture card-img-top">
      <div class="card-body">
    <h2 class="character__name card-tittle h4">${nombrePersonaje} ${familiaPersonaje}</h2>
    <div class="character__info">
    <ul class="list-unstyled">
    <li>Edad ${edadPersonaje} años</li>
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
// const personajesGoT = [jaime, daenerys, bronn, tyrion, joffrey];
const cardContainer = document.querySelector(".card-container");

const prueba = new Personaje(
  "Joffrey",
  "Baratheon",
  31,
  "card character__card",
  cardContainer
);

const prueba2 = new Luchador(
  "Daenerys",
  "Targaryen",
  30,

  "Dragones",
  10,
  "card character__card",
  cardContainer
);
