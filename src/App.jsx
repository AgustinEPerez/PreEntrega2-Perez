import Nabvar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Cart from './Componentes/Cart/Cart'
import Checkout from './Componentes/Checkout/Checkout'
import Footer from './Componentes/Footer/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <Nabvar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/marca/:idMarca' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App