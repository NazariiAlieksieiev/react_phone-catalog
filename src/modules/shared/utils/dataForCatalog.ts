import { Category } from '../types/types';
import { productsFromApi } from './fetchJSON';

export const getProductByCategory = async (category: Category) => {
  const products = await productsFromApi;

  if (products) {
    return products.filter(product => product.category === category);
  }

  return [];
};
