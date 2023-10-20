
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

export function formatearCategoria(palabra) {
  
  const palabraCapitalizada = palabra === 'cienciaFiccion' ? palabra.split(/(?=[A-Z])/) 
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
  .join(" ")
  :palabra.charAt(0).toUpperCase() + palabra.slice(1)


  return palabraCapitalizada;
}

