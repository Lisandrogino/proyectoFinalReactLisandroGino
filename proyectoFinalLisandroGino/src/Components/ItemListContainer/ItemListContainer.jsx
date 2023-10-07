import React, { useEffect, useState } from 'react';
import asyncMocks from '../../Hooks/assyncMoocls';
import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

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
