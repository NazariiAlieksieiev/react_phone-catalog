import { Product } from '../types/types';
import { getJSONData } from '../utils/axiosJSON';

export const getProducts = () => getJSONData<Product[]>('products.json');
