/* eslint-disable @typescript-eslint/dot-notation */
import { useEffect, useState } from 'react';
import style from './Categories.module.scss';
import { Categories as CategoriesType } from '../../../shared/types/types';
import { fetchJson } from '../../../shared/utils/fetchJSON';

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const loadCategory = async () => {
      const slidesFromApi =
        await fetchJson<CategoriesType[]>('categories.json');

      if (slidesFromApi) {
        setCategories(slidesFromApi);
      }
    };

    loadCategory();
  }, []);

  return (
    <div className={style[`categories`]}>
      <h2 className={style[`categories__title`]}>Shop by category</h2>

      {categories.map((category, i) => (
        <div className={style[`categories__category`]} key={i}>
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
          <p className={style['categories__category-amount']}>95 models</p>
        </div>
      ))}
    </div>
  );
};
