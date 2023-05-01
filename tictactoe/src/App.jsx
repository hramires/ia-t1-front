import "./App.css";
import React, {useState} from "react";
import {Tabuleiro} from "./components/Tabuleiro";

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

  const SelecionaCaixa = (indiceTabuleiro) =>{
    const tabuleiroAtualizado = tabuleiro.map((value, indice)=>{
      if(indice === indiceTabuleiro){
        return jogadorAtual === true ? "X" : "O"
      }else{
        return value;
      }
    })

    setTabuleiro(tabuleiroAtualizado);

    setJogadorAtual(!jogadorAtual);
  }

  return (
    <div className="App">
      <Tabuleiro tabuleiro={tabuleiro} onClick={SelecionaCaixa}/>
    </div>
  );
}

export default App;
