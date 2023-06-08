import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ nombre, precio, id, img }) => {
  return (
    <div className="card">
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <h4>Precio: {precio}</h4>
      <h4>ID: {id}</h4>
      <Link to={`/Item/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  )
}

export default Item