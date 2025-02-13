import { useState } from 'react';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line max-len
import { ProductCard } from '../../../shared/components/ProductCard/ProductCard';
import style from './ProductsSwiper.module.scss';
import { Product } from '../../../../types/types';

interface Props {
  cardsData: Product[];
  title: string;
  withDiscount?: boolean;
}

export const ProductSwiper: React.FC<Props> = ({
  cardsData,
  withDiscount = false,
  title,
}) => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={style['product-swiper__container']}>
      <div className={style['product-swiper__top-panel']}>
        <h2 className={style['product-swiper__title']}>{title}</h2>

        <div className={style['product-swiper__buttons']}>
          <button
            className={`${style['product-swiper__button-prev']} ${style['product-swiper__button']}`}
            onClick={() => {
              swiper?.slidePrev();
            }}
            disabled={isBeginning}
          ></button>
          <button
            className={`${style['product-swiper__button-next']} ${style['product-swiper__button']}`}
            onClick={() => {
              swiper?.slideNext();
            }}
            disabled={isEnd}
          ></button>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={'auto'}
        onSwiper={setSwiper}
        onSlideChange={s => {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        onReachEnd={() => setIsEnd(true)}
        onReachBeginning={() => setIsBeginning(true)}
      >
        {cardsData.map((cardData, i) => (
          <SwiperSlide
            key={cardData.id}
            {...(i !== cardsData.length - 1 && {
              style: { width: 'fit-content' },
            })}
          >
            <ProductCard cardData={cardData} withDiscount={withDiscount} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
