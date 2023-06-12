import "./Home.css"
import { Link, NavLink } from "react-router-dom"

const Home = () => {
  return (
    <Link>
      <div className="home_container">
        <NavLink className="box malbec" to={'/Categoria/2'}>
          <div>
            Malbec
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div>
        </NavLink>
        <NavLink className="box cabernet" to={'/Categoria/3'}>
          <div>
            Cabernet
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div></NavLink>
        <NavLink className="box pinot" to={'/Categoria/4'}>
          <div>
            Pinot
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div></NavLink>
        <NavLink className="box chardonay" to={'/Categoria/5'}>
          <div>
            Chardonay
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div></NavLink>
        <NavLink className="box blend" to={'/Categoria/5'}>
          <div>
            Blend
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div></NavLink>
      </div>
    </Link>
  )
}

export default Home