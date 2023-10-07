
import products from '../products.json';

const asyncMocks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export default asyncMocks;
