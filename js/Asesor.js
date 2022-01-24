import { daenerys } from "./Luchador.js";

const { default: Personaje } = require("./Personaje");

class Asesor extends Personaje {
  asesorado;
  constructor(nombreAsesor, familiaAsesor, edadAsesor, personajeAsesorado) {
    super(nombreAsesor, familiaAsesor, edadAsesor);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado;
    }
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
export default { tyrion };
