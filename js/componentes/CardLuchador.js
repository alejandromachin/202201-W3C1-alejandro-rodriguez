import CardComponent from "./CardComponent.js";

export default class CardLuchador extends CardComponent {
  arma;
  destreza;
  constructor(parentElement, className, nombre, familia, edad, arma, destreza) {
    super(parentElement, className, nombre, familia, edad);
    this.arma = arma;
    this.destreza = destreza;
    this.insertHTML();
  }

  insertHTML() {
    const listaAcciones = this.element.querySelector(
      ".character__overlay .list-unstyled"
    );

    listaAcciones.innerHTML = `<li></li>`;
  }
}
