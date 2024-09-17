import './ItemListContainer.css'
import { getCamisetas, getMarca } from '../../asynmock'
import ItemList from '../ItemList/ItemList.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [camisetas, setCamisetas] = useState([])

  const {idMarca} = useParams()

  useEffect(() => {
    const funcionCamisetas = idMarca ? getMarca : getCamisetas;

    funcionCamisetas(idMarca)
    .then(respuesta => setCamisetas(respuesta))
  }, [idMarca])

  return (
    <div className='main'>
      <ItemList camisetas={camisetas}/>
    </div>
  )
}

export default ItemListContainer