import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import './Navbar.css'

const Nabvar = () => {
  return (
      <header className='header'>
        <h1 className='title'>FutbolShopOnline</h1>

        <nav className='nav'>
          <ul>
            <li>Adidas</li>
            <li>Nike</li>
            <li>Pumas</li>
            <li>Under Armour</li>
            <li>Asics</li>
            <li>Fila</li>
          </ul>
        </nav>

        <CartWidget/>
      </header>
  )
}

export default Nabvar