import Component from "./Component.js";

export default class ComunicationComponent extends Component {
  nombre;
  familia;
  constructor(parentElement, className, nombre, familia) {
    super(parentElement, className, "div");
    this.nombre = nombre;
    this.familia = familia;
    this.insertHTML();
  }

  insertHTML() {
    this.element.innerHTML = `<p class="comunications__text display-1">Una frase que dice ${this.nombre} ${this.familia}</p>
      <img
        class="comunications__picture"
        src="img/${this.nombre}.jpg"
        alt="${this.nombre} y ${this.familia}"
      />`;
  }
}
