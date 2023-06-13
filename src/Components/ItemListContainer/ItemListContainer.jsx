import { useState, useEffect, CSSProperties } from "react"
// import { getProductos, getProductoPorCategoria } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

//importamos nuevas funciones para base de datos:
import { collection, getDocs, where, query } from "firebase/firestore";
import { dataBase } from "../../Service/Config";
//Importacion del spinner
import PuffLoader from "react-spinners/PuffLoader";


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const { idCategoria } = useParams()
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(dataBase, "Inventario"), where("idCat", "==", idCategoria)) : collection(dataBase, "Inventario");
    //Spinner
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
  }, [idCategoria])
  return (
    <div className="misProductos">
      {
        loading ? <PuffLoader className="clip" color="#40128B" size={80}/> 
        : 
        <div>
          <h2>{greeting}</h2>
          <ItemList productos={productos} />
        </div>
      }
    </div>
  )
}

export default ItemListContainer