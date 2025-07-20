class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "guerreiro":
        ataque = "espada";
        break;
      case "mago":
        ataque = "magia";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
        break;
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}
const meuHeroi = new Heroi("Aline", 25, "mago");

meuHeroi.atacar();
