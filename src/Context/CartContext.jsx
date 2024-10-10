import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  cantidadTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const addToCart = (item, cantidad) => {
    setCart((prevCart) => {
      const productoExistente = prevCart.find((prod) => prod.item.id === item.id);

      if (productoExistente) {
        const cartUpdate = prevCart.map((prod) =>
          prod.item.id === item.id
            ? { ...prod, cantidad: prod.cantidad + cantidad }
            : prod
        );
        return cartUpdate;
      } else {
        const nuevoProducto = [...prevCart, { item, cantidad }];
        return nuevoProducto;
      }
    });

    setCantidadTotal((prev) => prev + cantidad);
    setTotal((prev) => prev + item.precio * cantidad);
  };

  const deleteProduct = (id) => {
    setCart((prevCart) => {
        const productDeleted = prevCart.find((prod) => prod.item.id === id);
        if (!productDeleted) {
            return prevCart;
        }

        const cartUpdate = prevCart.filter((prod) => prod.item.id !== id);
        setCantidadTotal((prev) => prev - productDeleted.cantidad);
        setTotal((prev) => prev - productDeleted.item.precio * productDeleted.cantidad);

        return cartUpdate;
    });
};


  const emptyCart = () => {
    setCart([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cantidadTotal,
        addToCart,
        deleteProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};