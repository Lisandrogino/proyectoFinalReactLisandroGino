import React from 'react'

const ItemDetail = ({item}) => {
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
                
        </div>
    </div>    
    
  )
}

export default ItemDetail