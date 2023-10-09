import './ProductItem.css'
import { Link } from 'react-router-dom'

const ProductItem = ({productos}) => {
    
  return (
    <div className="productoContainer">
        <div className="imagenContainer">
                <h2 className="productoTitulo">{productos.title}</h2>
        </div>

        <div className="productoDetalleContainer">
                <img src={productos.imagen} alt="imagen portada" className="productoImagen"/>
                <h3 className="productoAutor">{productos.author}</h3>
                <h4 className="productoPrecio"> $ {productos.price}</h4>

                <Link className="buttonVerLibro" to={`/Item/${productos.id}`}>Ver Libro</Link>
        </div>

    </div>
  )
}

export default ProductItem