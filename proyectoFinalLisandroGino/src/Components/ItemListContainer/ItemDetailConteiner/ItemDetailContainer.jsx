import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { solicitarProducto } from '../../../Hooks/assyncMoocls'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../../firebase/dataFirebase'


const ItemDetailConainer = () => {

  const [item, setimtem] = useState(null)
  const id = useParams().id
  console.log(id)

  useEffect(() => {
   
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((resp)=>{
       setimtem(
          {...resp.data(), id: resp.id}
        );
      })
  }, [id])
  


  return (
    <div>
    {item && <ItemDetail item={item}/> }
    </div>
     
  )
}

export default ItemDetailConainer