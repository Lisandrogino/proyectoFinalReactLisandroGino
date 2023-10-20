import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ItemList.css'
import { formatearCategoria } from '../../../Hooks/assyncMoocls'



const ItemList = ({productos, titulo}) => {

  //prueba
  console.log(productos)

  
  const tituloFormateado = formatearCategoria(titulo);




  return (


 
    <div className='productListContainer'>


      <div className='itemListTitleContainer'>
      <h1 className='itemListTitle'>{tituloFormateado}</h1>
      </div>

      
     
      <div className='productListTag'>

      


        {productos.map((prod)=> < ProductItem productos={prod} key={prod.id} />)}

      </div>

      
     

    </div>
  )
}

export default ItemList