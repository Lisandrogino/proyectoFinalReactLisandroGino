import React, { useEffect, useState } from 'react';
import asyncMocks from '../../Hooks/assyncMoocls';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState('products')
  

  const category = useParams().category;
  console.log(category)

  useEffect(() => {
    asyncMocks()
      .then((res) => {
        if(category){
          setProducts(res.filter((item)=> item.category === category))
          setTitulo(category)
        }else{
          setProducts(res)
          setTitulo('products')
        }
      });
  }, [category]);

  console.log(products)

  return (
    <div>
     
        <ItemList productos={products} titulo={titulo}/>
      
    </div>
  );
}

export default ItemListContainer;
