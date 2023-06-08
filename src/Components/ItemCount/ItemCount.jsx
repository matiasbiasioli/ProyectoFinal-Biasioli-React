import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial)
  
  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }
  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1)
    }
  }
  return (
    <>
      <div className="contadorContainer">
        <button onClick={decrementar}>-</button>
        <strong>{contador}</strong>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={()=> funcionAgregar(contador)}>Agregar a Carrito</button>
    </>
  )
}

export default ItemCount