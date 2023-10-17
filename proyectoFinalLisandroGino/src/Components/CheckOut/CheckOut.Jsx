import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useForm } from 'react-hook-form'


const CheckOut = () => {

    const {carrito, precioTotalCarrito, eliminarCarrito} = useContext(CartContext)

    const {register, handleSubmit} = useForm();

    const comprar = (data)=>{
        const pedido = {
            pedido: data,
            productos: carrito,
            total: precioTotalCarrito(),
        }
        console.log(pedido)
    }

  return (
    <div className='checkoutContainer'>

        <h1 className='checkoutTitle'>Finalizar Compra</h1>

            <form className='checkoutForm' onSubmit={handleSubmit(comprar)}>

                <imput className='checkoutName' type='text' placeholder='Ingresa tu nombre' {...register('nombre')} />
                <imput className='checkoutMail' type='email' placeholder='Ingresa tu mail' {...register('mail')} />
                <imput className='checkoutTel' type='phone' placeholder='Ingresa tu telefono' {...register('telefono')} />

                <button className='checkOutEnviar' type='submit'>Comprar</button>

        </form>

    </div>
  )
}

export default CheckOut