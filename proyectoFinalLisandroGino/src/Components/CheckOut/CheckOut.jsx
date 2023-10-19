import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/dataFirebase'
import { Button } from '@mui/material'



const CheckOut = () => {

    const [pedidosID, setPedidosId] = useState("");

    const {carrito, precioTotalCarrito, eliminarCarrito} = useContext(CartContext)

    const {register, handleSubmit, getValues} = useForm();

    

    const comprar = (data)=>{
        const pedido = {
            pedido: data,
            productos: carrito,
            total: precioTotalCarrito(),
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc)=>{
            setPedidosId(doc.id)
            eliminarCarrito()
        })
    }

    

    if(pedidosID){
        return(
            <div className='pedidosContainer'>
                <h1>Gracias por tu compra</h1>
                <p className='pedidoId'>Tu pedido es: {pedidosID}</p>
            </div>
        )
    }
        

  return (
    <div className='checkoutContainer'>

        <h1 className='checkoutTitle'>Finalizar Compra</h1>

            <form className='checkoutForm' onSubmit={handleSubmit(comprar)}>

                <input className='checkoutName' type='text' placeholder='Ingresa tu nombre' {...register('nombre')} />
                <input className='checkoutMail' type='email' placeholder='Ingresa tu mail' {...register('mail')} />
                <input className='checkoutTel' type='phone' placeholder='Ingresa tu telefono' {...register('telefono')} />

                <Button className='checkOutEnviar' size='small' variant="contained"  type='submit'>Comprar</Button>

        </form>

    </div>
  )
}

export default CheckOut