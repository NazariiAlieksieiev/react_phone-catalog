import React from 'react';
import style from './HomePage.module.scss';
import { Categories } from './components/Categories/Categories';
import { ProductSwiper } from './components/ProductsSwiper/ProductsSwiper';
import { BannerSwiper } from './components/BannerSwiper/BannerSwiper';
import { useAppSelector } from '../../app/hooks';

export const HomePage: React.FC = () => {
  const { newModels, hotPrices } = useAppSelector(state => state.products);

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
