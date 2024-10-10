import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css'; 

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { cart, emptyCart, total } = useContext(CartContext);

    const formManager = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Datos incorrectos o incompletos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los datos ingresados no coinciden");
            return;
        }

        const orden = {
            items: cart.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                emptyCart();
            })
            .catch(error => {
                console.log("Error al completar la orden", error);
                setError("Se produjo un error al crear la orden!");
            });
    };

    return (
        <div className="checkoutContainer">
            <h2>Formulario de Orden</h2>
            <form onSubmit={formManager}>
                {cart.map(prod => (
                    <div key={prod.item.id}>
                        <p>{prod.item.nombre}</p>
                        <p>{prod.item.precio} x {prod.cantidad}</p>
                        <p>{prod.item.precio}</p>
                    </div>
                ))}
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input id="apellido" type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono</label>
                    <input id="telefono" type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor="emailConfirmacion">Confirmación de Email</label>
                    <input id="emailConfirmacion" type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
                </div>
                {error && <p className="errorMessage">{error}</p>}
                <button type="submit">Comprar</button>
                {ordenId && (
                    <strong className="successMessage">¡Gracias por tu compra! Tu número de orden es: {ordenId}</strong>
                )}
            </form>
        </div>
    );
};

export default Checkout;
