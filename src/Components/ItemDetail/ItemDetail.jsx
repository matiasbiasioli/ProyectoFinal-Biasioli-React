import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ nombre, precio, img, id, stock }) => {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const handleCantidad = (cantidad) => {
    setCantidadCarrito(cantidad);
    //console.log("Se agregaron " + cantidad + " productos al carrito");
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='productDetails'>
      <div>
        <img src={img} alt={nombre} />
      </div>
      <div>
        <h3>Nombre: {nombre}</h3>
        <h4>Precio: {precio}</h4>
        <h4>ID: {id}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum aspernatur distinctio cum. Velit tempore laudantium ad aspernatur unde rem ullam inventore, illo alias blanditiis? Unde omnis numquam sit? Minima, ab totam est libero ut, labore dolore ex distinctio alias repellendus explicabo odit incidunt qui, sed sequi voluptatibus in rerum.</p>
        {
          cantidadCarrito > 0 ? (<Link to="/Cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handleCantidad} />)
        }
      </div>
    </div>
  )
}

export default ItemDetail