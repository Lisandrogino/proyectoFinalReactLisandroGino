import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const CartPage = () => {

    const {carrito, precioTotalCarrito, eliminarCarrito, eliminarProducto} = useContext(CartContext)

    const vaciarCarrito = ()=>{
        eliminarCarrito();
    }
  return (
    <div className='carritoContainer'>
        <h1> Carrito </h1>

        {
            carrito.map((prod)=>
            <div className='carrtitoProductContainer' key={prod.id}>
                
                <h2>{prod.title}</h2>
                <img src={prod.imagen} alt="imagen portada" className="productoDetalleImagen"/>
                
                <p>Cantidad:{prod.cantidad}</p>
                <p>Precio: ${prod.price}</p>
                <p>Precio Total: ${prod.price * prod.cantidad}</p>
                <Button variant="contained" onClick={()=>eliminarProducto(prod.id)}>Eliminar Producto</Button>
                

            </div>    
            )
        }

        {

            carrito.length > 0? 
            <>
            <h2 className='carritoTotalCompra'>Precio Total Compra: ${precioTotalCarrito()}</h2>
            <Button className='vaciarCarritoButton' variant="contained"  onClick={vaciarCarrito}>Vaciar Carrito</Button>

            <Link to='/checkout' className='checkoutButton'>
                        <Button className='checkoutbuttonbutton' sx={{ marginTop: '30px' }} variant="contained" color='secondary'>
                            Finalizar Compra
                        </Button>
                </Link>
            </>:
           
            <h2>El carrito no tiene productos buscalos, <Link to='/'> haciendo clik.</Link></h2>
            
        }

         
       
    </div>
  )
}

export default CartPage