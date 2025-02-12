import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Category, Product } from '../shared/types/types';
import { getProductByCategory } from '../shared/utils/dataForCatalog';

export const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { category } = useParams();

  useEffect(() => {
    const loadProductsByCategory = async () => {
      const productsByCategory = await getProductByCategory(
        category as Category,
      );

      if (productsByCategory) {
        setProducts(productsByCategory);
      }
    };

    loadProductsByCategory();
  }, [category]);

  // eslint-disable-next-line no-console
  console.log(products);

  return <h1>Soon This will be Catalog page</h1>;
};
