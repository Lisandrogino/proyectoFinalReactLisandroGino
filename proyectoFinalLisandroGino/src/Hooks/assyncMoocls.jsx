
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

function formatearCategoria(category) {
  // Dividir la cadena en palabras separadas por espacios
  const palabras = category.split(' ');

  // Convertir la primera letra de cada palabra en mayúscula
  const palabrasCapitalizadas = palabras.map((palabra) =>
    palabra.charAt(0).toUpperCase() + palabra.slice(1)
  );

  // Unir las palabras nuevamente en una sola cadena
  const categoriaFormateada = palabrasCapitalizadas.join(' ');

  return categoriaFormateada;
}



