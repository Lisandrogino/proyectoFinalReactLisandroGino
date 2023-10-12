import { useState } from 'react'
import Home from './Components/Home/Home'

import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailConainer from './Components/ItemListContainer/ItemDetailConteiner/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import { CartContext } from './Context/CartContext'
import CartPage from './Components/Cart/CartPage'




function App() {
  
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = ( item, cantidad) => {
    const agregarProducto ={...item, cantidad};

    const nuevoCarrito = [...carrito];

    const productoRepetido = carrito.find((producto) => producto.id === agregarProducto.id);
   
    if(productoRepetido ) {
      
      productoRepetido.cantidad = productoRepetido.cantidad + cantidad;
     
    } else {
      nuevoCarrito.push(agregarProducto);
    }

    setCarrito(nuevoCarrito);
 
  } 

  const cantidadCartWidget = ()=>{
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotalCarrito = ()=>{
    return carrito.reduce((acc, prod)=> acc + prod.price * prod.cantidad, 0)
  }

  const eliminarCarrito = ()=>{
    setCarrito([])
  }

  const eliminarProducto = (id)=>{
    const nuevoCarrito = carrito.filter((prod)=> prod.id !== id);
    setCarrito(nuevoCarrito)
  }

  return (
    <>

    <CartContext.Provider value={{carrito, agregarCarrito, cantidadCartWidget, precioTotalCarrito, eliminarCarrito, eliminarProducto}}>
    <BrowserRouter>


          <Home />

      <Routes>

        <Route exact path='/' element={<ItemListContainer/>} />

        <Route exact path='/item/:id' element={<ItemDetailConainer />} />

        <Route exact path='/products/:category' element={<ItemListContainer />} />

        <Route exact path='/carrito' element={<CartPage />} />

          
     </Routes>


     </BrowserRouter>

     </CartContext.Provider>

    </>
  )
}

export default App