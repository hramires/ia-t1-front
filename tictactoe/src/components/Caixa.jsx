import React from 'react'
import "./Caixa.css";

export const Caixa = ({value, onClick}) => {
  const style = value === "X" ? "caixa x" : "caixa o"
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}
