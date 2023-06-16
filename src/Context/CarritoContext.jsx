import { createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import '../Components/Cart/Cart.css'

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [cantidadTotal, setCantidadTotal] = useState(0)
  console.log(carrito);

  const agregarProducto = (item, cantidad) => {
    const productoExiste = carrito.find(prod => prod.item.id === item.id);
    if (!productoExiste) {
      setCarrito(prev => [...prev, { item, cantidad }]);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + (item.precio * cantidad));
    } else {
      const carritoActualizado = carrito.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + (item.precio * cantidad));

    }
  }
  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find(prod => prod.item.id === id);
    const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
    setCarrito(carritoActualizado)
    setCantidadTotal(prev => prev - productoEliminado.cantidad)
    setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
  }
  const vaciarCarrito = () => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: "Deseas vaciar el carrito?",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
      position: "center",
      customClass: {
        container: 'container-class'
      }
    }) .then ((result)=>{
      if (result.isConfirmed){
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0)
        MySwal.fire ({
          title: "Su carrito ha sido vaciado!",
          icon: "success",
          position: "center",
          customClass: {
            container: 'container-class',
          }
        })
      }
    })
  }
  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito, cantidadTotal, total }}>
      {children}
    </CarritoContext.Provider>
  );
}