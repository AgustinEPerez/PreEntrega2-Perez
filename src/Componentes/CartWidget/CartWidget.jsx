import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cart' >
        <FaShoppingCart />
        <span>4</span>
    </div>
  )
}

export default CartWidget