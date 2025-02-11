import { useParams } from 'react-router-dom';

export const Catalog: React.FC = () => {
  const { category } = useParams();

  // eslint-disable-next-line no-console
  console.log(category);

  return <h1>Soon This will be Catalog page</h1>;
};
