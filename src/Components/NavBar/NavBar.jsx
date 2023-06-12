import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const nav = document.querySelector('.nav')
  const open = ()=>{
    nav.classList.add('hidden');
  }
  return (
    <header className='header_container'>
      <Link to={'/'} >
        <h1>Winery Store</h1>
      </Link>
      <button className='btnBar' onClick={open}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className='nav'>
        <FontAwesomeIcon className='btnClose' icon={faXmark} onClick={close} />
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
    </header>

  )
}

export default NavBar