import React from 'react'
import { logo, minilogo } from '../../assets'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer container'>
        <div>
            <img src={minilogo}/>
        </div>
        <div className='footer__info'>
            <ul>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Teams and Conditions</li>
            </ul>
        </div>
        <div className='footer__end'>
            <span>© 2020 Furnity, All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer