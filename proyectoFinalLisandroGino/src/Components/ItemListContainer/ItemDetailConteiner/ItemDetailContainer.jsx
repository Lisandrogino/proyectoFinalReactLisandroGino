import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { solicitarProducto } from '../../../Hooks/assyncMoocls'



import './ItemDetailContainer.css'


const ItemDetailConainer = (ItemId) => {

  const [item, setimtem] = useState(null)

  useEffect(() => {
   
    solicitarProducto(ItemId)
    .then((res)=>{
      setimtem(res);
    })
  }, [ItemId])
  


  return (
    <div>
    {item && <ItemDetail ItemId={ItemId}/> }
    </div>
     
  )
}

export default ItemDetailConainer