import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { solicitarProducto } from '../../../Hooks/assyncMoocls'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'


const ItemDetailConainer = () => {

  const [item, setimtem] = useState(null)
  const id = useParams().id
  console.log(id)

  useEffect(() => {
   
    solicitarProducto(Number(id))
    .then((res)=>{
      setimtem(res);
    })
  }, [id])
  


  return (
    <div>
    {item && <ItemDetail item={item}/> }
    </div>
     
  )
}

export default ItemDetailConainer