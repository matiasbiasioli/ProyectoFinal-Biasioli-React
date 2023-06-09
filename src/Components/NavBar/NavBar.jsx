import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    
      <header className='header_container'>
        <Link to={'/'} >
          <h1>Winery Store</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to={`/Categoria/2`} >Malbec</NavLink>
            </li>
            <li>
              <NavLink to={'/Categoria/3'}>Cabernet</NavLink>
            </li>
            <li>
              <NavLink to={'/Categoria/4'}>Chardonay</NavLink>
            </li>
            <li>
              <NavLink to={'/Categoria/5'}>Blends</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    
  )
}

export default NavBar