import React, { useEffect, useState } from 'react';
import asyncMocks from '../../Hooks/assyncMoocls';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  

  const category = useParams().category;
  console.log(category)

  useEffect(() => {
    asyncMocks()
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div>
     
        <ItemList productos={products}/>
      
    </div>
  );
}

export default ItemListContainer;
