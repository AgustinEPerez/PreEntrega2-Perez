import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import './Navbar.css'

const Nabvar = () => {
  return (
      <header className='header'>

        <nav className='nav'>
        <h1 className='title'><span>Futbol</span>Shop<span>Online</span></h1>
          <ul>
            <li>Adidas</li>
            <li>Nike</li>
            <li>Pumas</li>
            <li>Under Armour</li>
            <li>Asics</li>
            <li>Fila</li>
          </ul>
        </nav>

        <div className='cart-div'>
          <CartWidget/>
        </div>
      </header>
  )
}

export default Nabvar