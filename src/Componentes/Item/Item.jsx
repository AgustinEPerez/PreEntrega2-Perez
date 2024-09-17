import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({nombre, precio, img, id}) => {
  return (
    <div className='card'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>${precio}</p>
        <button>
          <Link to={`/item/${id}`}>Ver detalle</Link>
        </button>
    </div>
  )
}

export default Item