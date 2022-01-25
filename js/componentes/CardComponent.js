import { Asesor } from "../Asesor.js";
import { Escudero } from "../Escudero.js";
import { Luchador } from "../Luchador.js";
import { Rey } from "../Rey.js";
import Component from "./Component.js";

export default class CardComponent extends Component {
  tipo;
  sirveA;
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(parentElement, className, nombre, familia, edad, personaje) {
    super(parentElement, className, "div");
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.generateHTML();
    this.typeOf(personaje);
  }

  generateHTML() {
    this.element.innerHTML = ` <img
              src="img/${this.nombre}.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.nombre} ${this.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>`;
    // const imatge = new Image(asdasd);
    // imatge.append("nomb");
  }

  typeOf(element) {
    if (element instanceof Rey) {
      const listaAcciones = this.element.querySelector(
        ".character__overlay .list-unstyled"
      );
      listaAcciones.innerHTML = `<li>Años de reinado: ${element.anyosReinado}</li> `;
    }
    if (element instanceof Luchador) {
      const listaAcciones = this.element.querySelector(
        ".character__overlay .list-unstyled"
      );
      listaAcciones.innerHTML = `<li>Arma: ${element.arma}</li><li>Destreza ${element.destreza}</li>  `;
    }
    if (element instanceof Asesor) {
      const listaAcciones = this.element.querySelector(
        ".character__overlay .list-unstyled"
      );
      listaAcciones.innerHTML = `<li>Asesora a: ${element.asesorado}</li> `;
    }
    if (element instanceof Escudero) {
      const listaAcciones = this.element.querySelector(
        ".character__overlay .list-unstyled"
      );
      listaAcciones.innerHTML = `<li>Sirve a: ${element.sirveA}</li> <li>Peloteo: ${element.pelotismo}</li> `;
    }
  }
}
