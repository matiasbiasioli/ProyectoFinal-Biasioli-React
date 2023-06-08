import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to={"/"}>Ver Productos</Link>
      </>
    ) 
  }
  return (
    <div>
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <Link to={'/Checkout'}> Finalizar Compra</Link>
    </div>
  )
}

export default Cart