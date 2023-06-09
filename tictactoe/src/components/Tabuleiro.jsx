import React, { useState, useEffect } from 'react';
import {Caixa} from "./Caixa";
import "./Tabuleiro.css";
import axios from "axios";


export const Tabuleiro = ({tabuleiro, onClick}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (tabuleiro.some(item => item !== null)) {
      axios.post("http://localhost:8080/v1/knn/calcular", tabuleiro.map(i => i == null ? '' : i))
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [tabuleiro]);

  const definirStatus = () => {
    switch (data.status) {
      case "CONTINUA": return { texto: "Vez de outro jogador", cor: "#5F7E85" };
      case "POSITIVO_X": return { texto: "X venceu!", cor: "#FF4625" };
      case "NEGATIVO_X": return { texto: "O venceu!", cor: "#007bff" };
      default: return { texto: "Aguardando movimento", cor: "#ffc107" };
      /* para quando O vencer: { texto: "O venceu!", cor: "#2C87FF" }
         para quando der velha: { texto: "Deu velha!", cor: "#5F7E85" } */
    }
  }

  return (
    <div>
      <div className='status' style={{ backgroundColor: definirStatus().cor }}>
          { definirStatus().texto }
      </div>
      <div className='tabuleiro'>
          {tabuleiro.map((value, indice)=>{
              return <Caixa value={value} onClick={() => {
                onClick(indice);
              }}/>
          })}
      </div>
     </div>
  )
}
