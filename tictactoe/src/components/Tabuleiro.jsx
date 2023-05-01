import React from 'react'
import {Caixa} from "./Caixa";
import "./Tabuleiro.css"

export const Tabuleiro = ({tabuleiro, onClick}) => {
  return (
    <div className='tabuleiro'>
        {tabuleiro.map((value, indice)=>{
            return <Caixa value={value} onClick={() => onClick(indice)}/>
        })}
    </div>
  )
}
