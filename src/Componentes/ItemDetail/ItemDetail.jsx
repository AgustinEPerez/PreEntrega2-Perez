import './ItemDetail.css'

const ItemDetail = ({ nombre, precio, img, descripcion }) => {
    return (
        <div className='itemDetail'>
            <img src={img} alt={nombre} />
            <div className='detail'>
                <h3>{nombre}</h3>
                <p className='desc'>{descripcion}</p>
                <p>${precio}</p>
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail