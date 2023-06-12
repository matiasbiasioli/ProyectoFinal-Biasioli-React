import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

//Importamos nueva funciones:
import { getDoc, doc } from "firebase/firestore"
import { dataBase } from "../../Service/Config"

const ItemDetailContainer = () => {
  const [details, setDetails] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const nuevoDoc = doc(dataBase, "Inventario", itemId);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = { id: res.id, ...data }
        setDetails(nuevoProducto);
      })
      .catch(error => console.log(error))
  }, [itemId])

  return (
    <div>
      <ItemDetail {...details} />
    </div>
  )
}

export default ItemDetailContainer