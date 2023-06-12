import { useState, useEffect } from "react"
// import { getProductos, getProductoPorCategoria } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

//importamos nuevas funciones para base de datos:
import { collection, getDocs, where, query } from "firebase/firestore";
import { dataBase } from "../../Service/Config";

import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()
  let [loading, setLoading] = useState(true);

  useEffect (()=>{
    const misProductos = idCategoria ? query(collection(dataBase, "Inventario"), where("idCat", "==", idCategoria))  : collection(dataBase, "Inventario");

    getDocs(misProductos)
    
      .then(res =>{
        const nuevosProductos = res.docs.map(doc=>{
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <div className="misProductos">
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer