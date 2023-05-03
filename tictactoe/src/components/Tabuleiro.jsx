import React, { useState } from 'react';
import {Caixa} from "./Caixa";
import "./Tabuleiro.css";
import axios from "axios";

export const Tabuleiro = ({tabuleiro, onClick}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAxios = () => {
    setIsLoading(true);
    axios.get("")
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
