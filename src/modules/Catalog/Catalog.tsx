/* eslint-disable @typescript-eslint/dot-notation */
import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../../app/hooks';
import { Category, Product } from '../../types/types';
import { useParams } from 'react-router-dom';
import style from './Catalog.module.scss';
import { Dropdown } from './components/Dropdown/Dropdown';
// eslint-disable-next-line max-len
import { NavigationString } from '../shared/components/NavigationString/NavigationString';

const sortByParams = ['Newest', 'Price: Low to High', 'Price: High to Low'];
const itemsPerPage = [16, 24, 32];

const selectCategories = createSelector(
  state => state.products,
  (products: {
    phones: Product[];
    tablets: Product[];
    accessories: Product[];
  }) => ({
    phones: products.phones,
    tablets: products.tablets,
    accessories: products.accessories,
  }),
);

export const Catalog: React.FC = () => {
  const categories = useAppSelector(selectCategories);
  const { category } = useParams<{ category: Category }>();

  if (category) {
    // eslint-disable-next-line no-console
    console.log(categories[category], category);
  }

  return (
    <div className={style['catalog']}>
      <NavigationString />

      <h1 className={style['catalog__title']}>Mobile phones</h1>
      {category && (
        <p className={style['catalog__items-number']}>
          {categories[category].length} models
        </p>
      )}

      <div className={style['catalog__selectors']}>
        <Dropdown title={'Sort by'} params={sortByParams} />
        <Dropdown title={'Items on page'} params={itemsPerPage} />
      </div>

      {/* <ProductList /> */}

      <div className={style['pagination']}></div>
    </div>
  );
};
