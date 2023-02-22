import React from 'react'
import { logo } from '../../assets'
import { BiSearchAlt } from 'react-icons/bi'
import { RiShoppingBasket2Line } from 'react-icons/ri'

import './Header.scss'

const Header = () => {
  return (
      <header className="header container">
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='header__info'>
          <ul>
            <li>Living room</li>
            <li>Kitchen</li>
            <li>Office</li>
            <li>Sofa</li>
          </ul>
        </div>
        <div className='header__icons'>
          <BiSearchAlt />
          <RiShoppingBasket2Line />
        </div>
      </header>
  )
}

export default Header