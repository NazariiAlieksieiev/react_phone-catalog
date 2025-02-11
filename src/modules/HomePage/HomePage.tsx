import React, { useEffect, useState } from 'react';
import style from './HomePage.module.scss';
import { Categories } from './components/Categories/Categories';
import { ProductSwiper } from './components/ProductsSwiper/ProductsSwiper';
import { BannerSwiper } from './components/BannerSwiper/BannerSwiper';
import { Product } from '../shared/types/types';
import { getHotPrices, getNewModels } from '../shared/utils/dataForSwipers';

export const HomePage: React.FC = () => {
  const [newModels, setNewModels] = useState<Product[]>([]);
  const [hotPrices, setHotPrices] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const newModelsFromApi = await getNewModels();
        const hotPricesFromApi = await getHotPrices();

        if (newModelsFromApi) {
          setNewModels(newModelsFromApi);
        }

        if (hotPricesFromApi) {
          setHotPrices(hotPricesFromApi);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to load slides:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className={style['home-page__title']}>
          Welcome to Nice Gadgets store!
        </h1>
      </div>

      <BannerSwiper />

      <ProductSwiper cardsData={newModels} title={'Brand new models'} />

      <div className="container">
        <Categories />
      </div>

      <ProductSwiper
        cardsData={hotPrices}
        withDiscount={true}
        title={'Hot prices'}
      />
    </>
  );
};
