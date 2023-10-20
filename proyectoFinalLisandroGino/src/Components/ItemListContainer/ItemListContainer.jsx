import React, { useEffect, useState } from 'react';
import asyncMocks from '../../Hooks/assyncMoocls';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../firebase/dataFirebase';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState('products')
  

  const category = useParams().category;
  console.log(category)

  useEffect(() => {

      const productsRef = collection(db, "products");

      const q = category ? query(productsRef, where("category", "==", category)) : productsRef;


      getDocs(q)
      .then((resp) => {

        setProducts(
          
          resp.docs.map((doc)=>{
            return {...doc.data(), id: doc.id}
            
          })
        );
        setTitulo(category)
        
      })

  }, [category]);

  console.log(products)

  return (
    <div>
     
        <ItemList productos={products} titulo={titulo} category={category} />
      
    </div>
  );
}

export default ItemListContainer;
