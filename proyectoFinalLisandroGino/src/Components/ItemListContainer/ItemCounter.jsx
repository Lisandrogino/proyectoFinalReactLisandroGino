import { Button } from '@mui/material'
import React, {  useState } from 'react'


const ItemCounter = ( {cantidad, sumar, restar, agregarCarrito} ) => {

    

  return (
    
    <div className='counterContainer'>

        <Button className='buttonRestar' onClick={restar}> - </Button>

        <p> cantidad: {cantidad}</p>

        <Button className='buttonSumar' onClick={sumar}> + </Button>

        <Button className='agregarCarritoButton' onClick={agregarCarrito}>Agregar al Carrito</Button>

    </div>

    

    
  )
}

export default ItemCounter