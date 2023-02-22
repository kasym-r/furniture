import React from 'react'

//Helpers
import { openInNewTab } from '../../helpers/window.helper';

const Card = ({ image, title, desc, price, id }) => {
  const onClick = () => {
    openInNewTab(id)
  }

  return (
    <div onClick={onClick}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{price}$</span>
      </div>
    </div>
  )
}

export default Card;
