import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartPage = () => {

    const {carrito} = useContext(CartContext)
  return (
    <div>CartPage</div>
  )
}

export default CartPage