import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div>
        <h2>No hay productos en el carrito</h2>
        <Link to={"/productos"}> <p>Ver Productos</p> </Link>
      </div>
    ) 
  }
  return (
    <div className="cartItemContainer">
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button className="btnVaciarCarrito" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <Link to={'/Checkout'}> <button className="btnFinalizarCompra">Finalizar Compra</button> </Link>
    </div>
  )
}

export default Cart