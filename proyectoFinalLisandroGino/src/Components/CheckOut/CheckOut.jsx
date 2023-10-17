import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/dataFirebase'



const CheckOut = () => {

    const {pedidosID, setPedidosId} = useState("");

    const {carrito, precioTotalCarrito, eliminarCarrito} = useContext(CartContext)

    const {register, handleSubmit} = useForm();

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
        })
    }

    
        

  return (
    <div className='checkoutContainer'>

        <h1 className='checkoutTitle'>Finalizar Compra</h1>

            <form className='checkoutForm' onSubmit={handleSubmit(comprar)}>

                <input className='checkoutName' type='text' placeholder='Ingresa tu nombre' {...register('nombre')} />
                <input className='checkoutMail' type='email' placeholder='Ingresa tu mail' {...register('mail')} />
                <input className='checkoutTel' type='phone' placeholder='Ingresa tu telefono' {...register('telefono')} />

                <button className='checkOutEnviar' type='submit'>Comprar</button>

        </form>

    </div>
  )
}

export default CheckOut