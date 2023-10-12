import React, { useContext } from 'react'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {

  const { cantidadCartWidget } = useContext(CartContext)


  return (

    <Link className='navBarCarrito' to='/carrito'>
   
    <AddShoppingCartRoundedIcon>

     

    </AddShoppingCartRoundedIcon>

    <span className='navBarCarritoCantidad'> {cantidadCartWidget()} </span>

    </Link>
  )  
}

export default CartWidget