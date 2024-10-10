import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
    const [addStock, setAddStock] = useState(0)
    const { addToCart } = useContext(CartContext)

    const stockManager = (cantidad) => {
        setAddStock(cantidad)
        const item = { id, nombre, precio, img, descripcion, stock }
        addToCart(item, cantidad)
    }

    return (
        <div className='itemDetail'>
            <img src={img} alt={nombre} />
            <div className='detail'>
                <h3>{nombre}</h3>
                <p className='desc'>{descripcion}</p>
                <p>${precio}</p>
                {
                    addStock > 0 ? (
                        <div className='divLink'>
                            <Link className='link' to="/cart"> Ver tu carrito</Link>
                        </div>
                    ) : (
                        <ItemCount start={1} stock={stock} addFunction={stockManager} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail
