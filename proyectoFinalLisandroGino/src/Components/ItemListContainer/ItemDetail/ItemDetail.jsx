import React from 'react'

const ItemDetail = ({Item}) => {
  return (

  
     <div className='detailProductContainer'>

        <div>
            <hi>Detalle Producto</hi>
        </div>

         <div className="imagenContainer">
                <h2 className="productoDetalleTitulo">{Item.title}</h2>
        </div>

        <div className="productoDetalleContainer">
                <img src={Item.imagen} alt="imagen portada" className="productoDetalleImagen"/>
                <h3 className="productoDetalleAutor">{Item.author}</h3>
                <p className='productoDetalleDetalle'>{Item.description}</p>
                <h4 className="productoDetallePrecio"> $ {Item.price}</h4>
                
        </div>
    </div>    
    
  )
}

export default ItemDetail