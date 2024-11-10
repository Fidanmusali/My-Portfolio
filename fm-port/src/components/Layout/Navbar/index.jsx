import React from 'react'
import "./style.css"
import { LanguageSwicher } from '../../../assets/Language'
import Modes from '../../../assets/Modes'

const Navbar = () => {
  return (
    <div className="top">
      <div className='navbar'>
        <div className="name">
          <h1>Fidan Musali</h1>
        </div>
        <div className="lang-swicher">
          <LanguageSwicher />
          <Modes />
        </div>
      </div>
    </div>

  )
}

export default Navbar