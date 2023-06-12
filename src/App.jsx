import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './Context/CarritoContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import Home from './Components/Home/Home'




function App() {
  
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>  
            <Route path='/' element={<Home/>} />
            <Route path='/productos' element={<ItemListContainer greeting={"Todos los vinos"} />} />
            <Route path='/Categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/Item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='*' element={<h2>Sitio en Construcción</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
