import { daenerys } from "./Luchador.js";
import Personaje from "./Personaje.js";

export class Asesor extends Personaje {
  asesorado;
  constructor(nombreAsesor, familiaAsesor, edadAsesor, personajeAsesorado) {
    super(nombreAsesor, familiaAsesor, edadAsesor);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado.nombre;
    }
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}
export const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
