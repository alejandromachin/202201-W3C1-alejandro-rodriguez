import { daenerys, jaime } from "./Luchador.js";
import { bronn } from "./Escudero.js";
import { tyrion } from "./Asesor.js";
import { joffrey } from "./Rey.js";

export default class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}
const personajesGoT = [jaime, daenerys, bronn, tyrion, joffrey];
