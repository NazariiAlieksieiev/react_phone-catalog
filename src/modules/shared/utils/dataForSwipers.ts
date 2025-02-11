import products from '../../../../public/api/products.json';

export const newModels = products.filter(
  product =>
    product.category === 'phones' &&
    product.year >= 2022 &&
    product.capacity === '256GB',
);

export const hotPrices = products.filter(product => +product.year <= 2018);
