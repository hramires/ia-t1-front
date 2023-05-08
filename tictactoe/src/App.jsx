import "./App.css";
import React, { useState } from "react";
import { Tabuleiro } from "./components/Tabuleiro";
import { BotaoLimpar } from "./components/BotaoLimpar";

function App() {
  // Condições para ganhar = um desses true
  // [0, 1, 2] primeira linha
  // [3, 4, 5] segunda linha
  // [6, 7, 8] terceira linha
  // [0, 3, 6] primeira coluna
  // [1, 4, 7] segunda coluna
  // [2, 5, 8] terceira coluna
  // [0, 4, 8] primeira diagonal
  // [2, 4, 6] segunda diagonal

  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState(true);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const SelecionaCaixa = (indiceTabuleiro) => {
    const tabuleiroAtualizado = tabuleiro.map((value, indice) => {
      if (indice === indiceTabuleiro) {
          return jogadorAtual === true ? "X" : "O";
        } else {
          return value;
        }
    });

    setTabuleiro(tabuleiroAtualizado);

    setJogadorAtual(!jogadorAtual);
  };

  const resetTabuleiro = () =>{
    setFimDeJogo(false);
    setTabuleiro(Array(9).fill(null))
  }

  return (
    <div className="App">
      <div className="Quadradao">
        <div className="Titulo">
          <h1>Tic Tac Toe</h1>
        </div>

        <Tabuleiro tabuleiro={tabuleiro} onClick={fimDeJogo ? resetTabuleiro : SelecionaCaixa} />
        <BotaoLimpar resetTabuleiro={resetTabuleiro}/>

        <div className="Integrantes">
          <h3 className="Grupo">Grupo:</h3>
          <ul className="Lista">
            <li>Arthur Viegas</li>
            <li>Arthur Zanella</li>
            <li>Henrique Ramires</li>
            <li>Leonardo Rubert</li>
	    <li>Lucas Salbego</li>
            <li>Marcos Sanhudo</li>
          </ul>
        </div>

        <div className="Materia">
          <div className="Disciplina">
            <h3><strong>Disciplina:</strong> Inteligência Artificial</h3>
          </div>
          <div className="Professora">
            <h3><strong>Professora:</strong> Silvia Moraes</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
