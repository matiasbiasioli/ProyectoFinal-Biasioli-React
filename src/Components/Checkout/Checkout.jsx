import { useState, useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { dataBase } from "../../Service/Config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css'


const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")

  //Funciones y validaciones
  const handleForm = (event) => {
    event.preventDefault()
    //verificamos q campos esten completos
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Complete todos los campos");
      return;
    }
    //validamos campos de emial coincidan
    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden")
      return;
    }
    //Paso 1: creamos el objeto de la orden
    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad
      })),
      total: carrito.reduce ((total, producto)=> total + producto.item.precio * producto.cantidad, 0),
      nombre,
      apellido,
      telefono,
      email,
    };
    //Paso 2: guardamos orden en base de datos
    addDoc(collection(dataBase, "Ordenes"), orden)
      .then(docRef =>{
        setOrdenId(docRef.id)
        vaciarCarrito()
      })
      .catch(error =>{
        console.error("error al crear orden", error);
        setError("se produjo un error al crear la orden")
      })
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleForm} className="form_container">
        {carrito.map(producto => (
            <div key={producto.item.id}>
              <p>{producto.item.nombre} x {producto.cantidad}</p>
              <p>Precio $: {producto.item.precio}</p>
              <hr />
            </div>
          ))}
          Total Orden: {total}
        <hr />
        <div className="form_box">
          <label htmlFor="">Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="form_box">
          <label htmlFor="">Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="form_box">
          <label htmlFor="">Telefono</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="form_box">
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form_box">
          <label htmlFor="">Email Confirmación</label>
          <input type="email" value={emailConfirmacion} onChange={(e)=>setEmailConfirmacion(e.target.value)} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className="btn_checkout">Finalizar Compra</button>
      </form>
      {ordenId && (<strong>Gracias por tu compra, tu numero de orden es  {ordenId}</strong>)}
    </div>
  )
}

export default Checkout