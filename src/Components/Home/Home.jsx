import "./Home.css"
import { Link, NavLink } from "react-router-dom"

const Home = () => {
  return (
    <Link>
      <div className="home_container">
        <NavLink className="box malbec" to={'/Categoria/2'}>
          <div>
            <p>
              Malbec
            </p>
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div>
        </NavLink>
        <NavLink className="box cabernet" to={'/Categoria/3'}>
          <div>
            <p>
              Cabernet
            </p>
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div></NavLink>
        <NavLink className="box pinot" to={'/Categoria/4'}>
          <div>
            <p>
              Pinot
            </p>
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div></NavLink>
        <NavLink className="box chardonay" to={'/Categoria/5'}>
          <div>
            <p>
              Chardonay
            </p>
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div></NavLink>
        <NavLink className="box blend" to={'/Categoria/5'}>
          <div>
            <p>
              Blend
            </p>
          </div>
          <div>
            <button>
              Ver Productos
            </button>
          </div>
        </NavLink>
      </div>
    </Link>
  )
}

export default Home