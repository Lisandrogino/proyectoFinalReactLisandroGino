import React, { useContext, useState } from 'react'
import ItemCounter from '../ItemCounter'
import { CartContext } from '../../../Context/CartContext'


const ItemDetail = ({item}) => {

  const {carrito, agregarCarrito} = useContext(CartContext)
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);

  const restar = () => { cantidad > 1 && setCantidad(cantidad -1)}

  const sumar = () => { cantidad < item.stock &&
       setCantidad(cantidad +1)}

  


  return (

   

  
     <div className='detailProductContainer'>

        <div>
            <h1>Detalle Producto</h1>
        </div>

                <div className="itemDetailContainer">
                <h2 className="productoDetalleTitulo">{item.title}</h2>
               </div>

        <div className="productoDetalleContainer">

               
               
                <img src={item.imagen} alt="imagen portada" className="productoDetalleImagen"/>
                
                <h3 className="productoDetalleAutor">{item.author}</h3>
                <p className='productoDetalleDetalle'>{item.description}</p>
                <h4 className="productoDetallePrecio"> $ {item.price}</h4>
                <ItemCounter cantidad={cantidad} sumar={sumar} restar={restar} 
                agregarCarrito={ ()=>{agregarCarrito(item, cantidad)}}/>
          
                
        </div>
    </div>    
    
  )
}

export default ItemDetail