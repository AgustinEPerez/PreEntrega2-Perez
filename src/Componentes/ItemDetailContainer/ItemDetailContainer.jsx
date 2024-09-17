import { useState } from "react"
import { getUnaCamiseta } from "../../asynmock"
import { useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [camiseta, setCamiseta] = useState(null)

    const {idItem} = useParams()

    useEffect(() =>{
        getUnaCamiseta(idItem)
        .then(respuesta => setCamiseta(respuesta))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...camiseta}/>
    </div>
  )
}

export default ItemDetailContainer