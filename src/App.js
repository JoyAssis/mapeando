import React, { Component } from "react";

class mapAnimals extends Component {
  state = {
    Animais: [
      {
        nome: "Oliver",
        animal: "Gato",
        curiosidade: "Gosta de rua"
      },
      {
        nome: "Yuki",
        animal: "Gato",
        curiosidade: "Sério, dorminhoco e mandão"
      },
      {
        nome: "Floquinho",
        animal: "Cachorro",
        curiosidade: "Se cai uma folha ele ta latindo"
      },
      {
        nome: "Abigail",
        animal: "Jabuti",
        curiosidade: "corre pra comer quando vê a comida dos gatos"
      },
      {
        nome: "Mini",
        animal: "Gato",
        curiosidade: "Tiozão, quando quer sachê mia que nem nenê"
      },
      {
        nome: "Max",
        animal: "Gato",
        curiosidade: "uma criança"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Pets</h1>
        <h2> • Ficha •</h2>
        {this.state.Animais.map((item) => (
          <div>
            <p>Nome: {item.nome}</p>
            <p>Animal: {item.animal}</p>
            <p>Curiosidade: {item.curiosidade}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default mapAnimals;
