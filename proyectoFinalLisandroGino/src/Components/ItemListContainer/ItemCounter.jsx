import { Button } from '@mui/material'
import React, {  useState } from 'react'


const ItemCounter = ( {cantidad, sumar, restar, agregarCarrito} ) => {

    

  return (
    
    <div className='counterContainer'>

        <Button className='buttonRestar' variant='contained'  onClick={restar}> - </Button>

        <p> cantidad: {cantidad} </p>

        <Button className='buttonSumar' variant='contained' onClick={sumar}> + </Button>

        <Button className='agregarCarritoButton' sx={{ marginTop: '30px' }} variant='contained' onClick={agregarCarrito}>Agregar al Carrito</Button>

    </div>

    

    
  )
}

export default ItemCounter