import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ItemList.css'
import { Grid } from '@mui/material'


const ItemList = ({productos, titulo}) => {

  //prueba
  console.log(productos)

  





  return (


 
    <div className='productListContainer'>


      <div className='itemListTitleContainer'>
      <h1 className='itemListTitle'>{titulo}</h1>
      </div>

      
     
      <div className='productListTag'>

      


        {productos.map((prod)=> < ProductItem productos={prod} key={prod.id} />)}

      </div>

      
     

    </div>
  )
}

export default ItemList