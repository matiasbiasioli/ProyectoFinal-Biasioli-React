const productos = [
  { nombre: "Familia Gascon Malbec", precio: 1800, id: "1", stock: 10, img: "../src/assets/fgmalbec.jpg", idCat: "2" },
  { nombre: "Escorihuela Gascon Malbec", precio: 2500, id: "2", stock: 10, img: "../src/assets/egmalbec.jpg", idCat: "2" },
  { nombre: "Familia Gascon Cabernet", precio: 2600, id: "3", stock: 10, img: "../src/assets/egmalbec.jpg", idCat: "3" },
  { nombre: "Escorihuela Gascon Cabernet", precio: 3200, id: "4", stock: 10, img: "../src/assets/egmalbec.jpg", idCat: "3" },
  { nombre: "Chardonay", precio: 1800, id: "5", stock: 10, img: "../src/assets/tchardonay.webp", idCat: "4" },
  { nombre: "Blend", precio: 1800, id: "7", stock: 10, img: "../src/assets/tchardonay.webp", idCat: "5" }
]

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    })
  }, 1000)
}

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(prod => prod.id === id)
      resolve(producto)
    })
  }, 1000)
}

export const getProductoPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
      resolve (productosCategoria)
    })
  })
}