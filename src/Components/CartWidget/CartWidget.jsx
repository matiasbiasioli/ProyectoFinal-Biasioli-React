const carrito = "../src/assets/carrito.png"
import { Link } from "react-router-dom"
import "./CartWidget.css"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div>
      <Link to={'/Cart'}>
        <img className="imgCarrito" src={carrito} alt="carrito" />
        {
          cantidadTotal > 0 && <span className="count">{cantidadTotal}</span>
        }
      </Link>
    </div>
  )
}

export default CartWidget