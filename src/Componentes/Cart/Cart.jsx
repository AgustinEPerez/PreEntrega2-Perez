import './Cart.css'
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, total, cantidadTotal, emptyCart } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <div className="cartContainer1">
                <h2>No tienes productos en tu carrito. :(</h2>
                <p>No te vayas sin tus camisetas favoritas!!!</p>
                <Link to="/">Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="cartContainer">
            {cart.map((prod) => (
                <CartItem key={`${prod.item.id}-${prod.item.nombre}`} item={prod.item} cantidad={prod.cantidad} />
            ))}
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <div className="buttonContainer">
                <button onClick={emptyCart}> Vaciar Carrito </button>
                <Link to="/checkout">Finalizar Compra</Link>
            </div>
        </div>
    );
}

export default Cart;
