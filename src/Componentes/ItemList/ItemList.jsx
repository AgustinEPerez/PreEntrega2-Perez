import Item from '../Item/Item.jsx'
import './ItemList.css'

const ItemList = ({camisetas}) => {
  return (
    <div className="contenedor">
        {camisetas.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList