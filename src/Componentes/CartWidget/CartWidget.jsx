import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext);

    return (
        <div className='cart'>
            <Link to="/cart">
                <FaShoppingCart />
            </Link>
            {
                cantidadTotal > 0 && <span>{cantidadTotal}</span>
            }
        </div>
    );
}

export default CartWidget;