import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ItemList.css'

const ItemList = ({productos}) => {

  //prueba
  console.log(productos)




  return (
    <div className='productListContainer'>

      <h1 className='itemListTitle'>Porductos</h1>

      <div className='productListTag'>

        {productos.map((prod)=> < ProductItem productos={prod} key={prod.id} />)}

      </div>

    </div>
  )
}

export default ItemList