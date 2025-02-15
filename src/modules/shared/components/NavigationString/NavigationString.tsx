/* eslint-disable @typescript-eslint/dot-notation */
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Category } from '../../../../types/types';
import style from './NavigationString.module.scss';

export const NavigationString: React.FC = () => {
  const { category } = useParams<{ category: Category }>();

  return (
    <div className={style['navigation-string']}>
      <Link to="/home" className={style['navigation-string__go-home-link']} />

      {category && (
        <Link
          to={`/catalog/${category}`}
          className={style['navigation-string__product-link']}
        >
          {category}
        </Link>
      )}
    </div>
  );
};
