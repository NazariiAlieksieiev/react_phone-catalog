import React from 'react';
import style from './HomePage.module.scss';
import { Categories } from './components/Categories/Categories';
import { ProductSwiper } from './components/ProductsSwiper/ProductsSwiper';
import { BannerSwiper } from './components/BannerSwiper/BannerSwiper';
import { newModels, hotPrices } from '../shared/utils/dataForSwipers';

export const HomePage: React.FC = () => {
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
