import Personaje from "./Personaje.js";

export class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edadLuchador,
    className,
    parentElement,
    armaLuchador,
    valorDestreza
  ) {
    super(
      nombreLuchador,
      familiaLuchador,
      edadLuchador,
      className,
      parentElement
    );
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
  }

  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    }
    if (valorDestreza > 10) {
      return 10;
    }
    return valorDestreza;
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}

export const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
export const daenerys = new Luchador(
  "Daenerys",
  "Targaryen",
  30,
  "Dragones",
  10
);
const cardContainer = document.querySelector(".card-container");

const prueba2 = new Luchador(
  "Daenerys",
  "Targaryen",
  30,
  "Dragones",
  10,
  "card character__card",
  cardContainer
);
