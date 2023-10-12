import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartPage = () => {

    const {carrito, precioTotalCarrito} = useContext(CartContext)
  return (
    <div className='carritoContainer'>
        <h1> Carrito </h1>

        {
            carrito.map((prod)=>
            <div className='carrtitoProductContainer' key={prod.id}>
                <h2>{prod.title}</h2>
                <p>Cantidad:{prod.cantidad}</p>
                <p>Precio: ${prod.price}</p>
                <p>Precio Total: ${prod.price * prod.cantidad}</p>

            </div>    
            )
        }

        <h2>Precio Total Compra: ${precioTotalCarrito()}</h2>
    </div>
  )
}

export default CartPage