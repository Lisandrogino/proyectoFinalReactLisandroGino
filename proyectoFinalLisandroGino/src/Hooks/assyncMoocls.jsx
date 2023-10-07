
import products from '../products.json';

const asyncMocks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export default asyncMocks;

export const solicitarProducto = (id) => {

  return new Promise((resolve, reject) => {
    
    const item = products.find((el)=> el.id == id)

    if(item){
      
      resolve(item)
    } else{
      reject:"Error ese producto no existe"
    }

  })
}
