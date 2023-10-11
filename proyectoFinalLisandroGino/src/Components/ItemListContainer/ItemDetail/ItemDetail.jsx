import React, { useState } from 'react'
import ItemCounter from '../ItemCounter'

const ItemDetail = ({item}) => {


  const [cantidad, setCantidad] = useState(1);

  const restar = () => { cantidad > 1 && setCantidad(cantidad -1)}

  const sumar = () => { cantidad < item.stock &&
       setCantidad(cantidad +1)}

  const agregarCarrito = () => {
    console.log({...item, cantidad})
  } 


  return (

   

  
     <div className='detailProductContainer'>

        <div>
            <hi>Detalle Producto</hi>
        </div>

         <div className="imagenContainer">
                <h2 className="productoDetalleTitulo">{item.title}</h2>
        </div>

        <div className="productoDetalleContainer">
                <img src={item.imagen} alt="imagen portada" className="productoDetalleImagen"/>
                <h3 className="productoDetalleAutor">{item.author}</h3>
                <p className='productoDetalleDetalle'>{item.description}</p>
                <h4 className="productoDetallePrecio"> $ {item.price}</h4>
                <ItemCounter cantidad={cantidad} sumar={sumar} restar={restar} agregarCarrito={agregarCarrito}/>
                
        </div>
    </div>    
    
  )
}

export default ItemDetail