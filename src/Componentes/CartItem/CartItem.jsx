import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item, cantidad }) => {
    const { deleteProduct } = useContext(CartContext);

    return (
        <div className="cart-item">
            <h4>{item.nombre}</h4>
            <h4>Cantidad: {cantidad}</h4>
            <h4>Precio: {item.precio}</h4>
            <button onClick={() => deleteProduct(item.id)}>X</button>
        </div>
    );
}

export default CartItem;
