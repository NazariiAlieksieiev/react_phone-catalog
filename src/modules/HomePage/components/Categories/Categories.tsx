/* eslint-disable @typescript-eslint/dot-notation */
import { useEffect, useState } from 'react';
import style from './Categories.module.scss';
import { ProductCategories } from '../../../../types/types';
import { getJSONData } from '../../../../utils/axiosJSON';
import { useAppSelector } from '../../../../app/hooks';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ProductCategories[]>([]);
  const { phones, tablets, accessories } = useAppSelector(
    state => state.products,
  );

  const categoriesProductLength = [
    phones.length,
    tablets.length,
    accessories.length,
  ];

  useEffect(() => {
    const loadProductCategories = async () => {
      const categoriesParams =
        await getJSONData<ProductCategories[]>('categories.json');

      if (categoriesParams) {
        setCategories(categoriesParams);
      }
    };

    loadProductCategories();
  }, []);

  return (
    <div className={style[`categories`]}>
      <h2 className={style[`categories__title`]}>Shop by category</h2>

      {categories.map((category, i) => (
        <div
          className={style[`categories__category`]}
          key={category.categoryName}
        >
          <a
            href="#"
            className={style['categories__category-link']}
            style={{ background: category.categoryBackground }}
          >
            <img
              src={category.categoryImg}
              alt={category.categoryName}
              className={style['categories__category-img']}
            />
          </a>

          <a href="#" className={style['categories__category-title']}>
            {category.categoryName}
          </a>
          <p className={style['categories__category-amount']}>
            {categoriesProductLength[i]} models
          </p>
        </div>
      ))}
    </div>
  );
};
