import { productsFromApi } from './fetchJSON';

export const getNewModels = async () => {
  const products = await productsFromApi;

  if (products) {
    return products.filter(
      product =>
        product.category === 'phones' &&
        product.year >= 2022 &&
        product.capacity === '256GB',
    );
  }

  return [];
};

export const getHotPrices = async () => {
  const products = await productsFromApi;

  if (products) {
    return products.filter(product => +product.year <= 2018);
  }

  return [];
};
