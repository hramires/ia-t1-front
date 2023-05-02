import React from 'react'
import "./BotaoLimpar.css"

export const BotaoLimpar = ({resetTabuleiro}) => {
  return (
    <button className="botaoLimpar" onClick={resetTabuleiro}>Limpar Tabuleiro</button>
  )
}
