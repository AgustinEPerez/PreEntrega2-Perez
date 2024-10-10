import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config.js'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [camisetas, setCamisetas] = useState([])

  const {idMarca} = useParams()

  useEffect(() => {
    const misCamisetas = idMarca ? query(collection(db, "productos"), where("idMarca", "==", idMarca)) : (collection(db, "productos"))

    getDocs(misCamisetas)
    .then(res => {
      const newProduct = res.docs.map(doc => {
        const data = doc.data()
        return {id:doc.id, ...data}
      })
      setCamisetas(newProduct)
    })
    .catch(error => console.log(error))
    .finally("Fin")
  }, [idMarca])

  return (
    <div className='main'>
      <h2>Camisetas</h2>
      <ItemList camisetas={camisetas}/>
    </div>
  )
}

export default ItemListContainer