const { default: Personaje } = require("./Personaje");

class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);

export default { joffrey };
