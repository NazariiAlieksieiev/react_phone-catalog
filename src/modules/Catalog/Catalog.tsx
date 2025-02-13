import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Category } from '../../types/types';

export const Catalog: React.FC = () => {
  const categories = useAppSelector(state => ({
    phones: state.products.phones,
    tablets: state.products.tablets,
    accessories: state.products.accessories,
  }));

  const { category } = useParams<{ category: Category }>();

  if (category) {
    // eslint-disable-next-line no-console
    console.log(categories[category], category);
  }

  return <h1>Soon This will be Catalog page</h1>;
};
