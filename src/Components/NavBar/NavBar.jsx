import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className='header_container'>
      <Link to={'/'} >
        <h1>Winery Store</h1>
      </Link>
      <nav className={`nav ${open && 'open'}`}>
        <FontAwesomeIcon className='btnClose' icon={faXmark} onClick={()=> setOpen(!open)} />
        <ul>
          <li>
            <NavLink to={'/productos'}>Todos los Productos</NavLink>
          </li>
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
      <button className='btnBar' onClick={()=> setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>

  )
}

export default NavBar