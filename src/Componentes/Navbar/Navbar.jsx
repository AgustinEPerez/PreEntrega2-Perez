import CartWidget from '../CartWidget/CartWidget.jsx'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Nabvar = () => {
  return (
      <header className='header'>

        <nav className='nav'>
        <Link to="/"><h1 className='title'><span>Futbol</span>Shop<span>Online</span></h1></Link>
          <ul>
            <li>
              <NavLink to="/marca/adidas">Adidas</NavLink>
            </li>
            <li>
              <NavLink to="/marca/nike">Nike</NavLink>
            </li>
            <li>
              <NavLink to="/marca/puma">Pumas</NavLink>
            </li>
            <li>
              <NavLink to="/marca/under armour">Under Armour</NavLink>
            </li>
            <li>
              <NavLink to="/marca/kappa">Kappa</NavLink>
            </li>
          </ul>
        </nav>

        <div className='cart-div'>
          <CartWidget/>
        </div>
      </header>
  )
}

export default Nabvar