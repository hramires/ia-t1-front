import React, { useState } from 'react';
import {Caixa} from "./Caixa";
import "./Tabuleiro.css";
import axios from "axios";

export const Tabuleiro = ({tabuleiro, onClick}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAxios = () => {
    setIsLoading(true);
    axios.post("http://localhost:8080/v1/knn/calcular", tabuleiro.map(i => i == null ? '' : i))
      .then(response => {
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        console.log(isLoading)
      });
  };


  return (
    <div className='tabuleiro'>
        {tabuleiro.map((value, indice)=>{
            return <Caixa value={value} onClick={() => {
              onClick(indice);
              getAxios();
            }}/>
        })}
    </div>
  )
}
