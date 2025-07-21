import React from 'react'
import './Cards.scss'

const Cards = ({src, titulo, paragrafo}) => {
  return (
    <div className="card">
          <img src={src} />
          <h3>{titulo}</h3>
          <p>{paragrafo}</p>
    </div>
  )
}

export default Cards