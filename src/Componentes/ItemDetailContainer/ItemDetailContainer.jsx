import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
import { db } from "../../services/config"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [camiseta, setCamiseta] = useState(null)

    const {idItem} = useParams()

    useEffect(() =>{
      const newDoc = doc(db, "productos", idItem)

      getDoc(newDoc)
      .then(res => {
        const data = res.data();
        const newProduct = {id: res.id, ...data}
        setCamiseta(newProduct)
      })
      .catch(error => console.log(error))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...camiseta}/>
    </div>
  )
}

export default ItemDetailContainer