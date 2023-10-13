import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const CartContext = createContext();


const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []


export const CartProvider = ({children})=>{

    const [carrito, setCarrito] = useState(carritoInicial);

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

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])
  

  return(

    <CartContext.Provider value={{carrito, agregarCarrito, cantidadCartWidget, precioTotalCarrito, eliminarCarrito, eliminarProducto}}>
        {children}
    </CartContext.Provider>
  )

}