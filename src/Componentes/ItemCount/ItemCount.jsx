import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ start, stock, addFunction }) => {

    const [count, setCount] = useState(start)

    const addItem = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const removeItem = () => {
        if (count > start) {
            setCount(count - 1)
        }
    }

    return (
        <div className='ItemCount'>

            <div className="Count">
                <button onClick={removeItem}> - </button>
                <strong> {count} </strong>
                <button onClick={addItem}> + </button>
            </div>

            <button className='CartBtn' onClick={() => addFunction(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount