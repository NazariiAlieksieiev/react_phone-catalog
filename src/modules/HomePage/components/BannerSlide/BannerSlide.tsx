/* eslint-disable no-console */
import React from 'react';
import style from './BannerSlide.module.scss';
import { Slide } from '../../../shared/types/types';

interface Props {
  slideInfo: Slide;
}

export const BannerSlide: React.FC<Props> = ({ slideInfo }) => {
  const { imgPathMobile, imgPathTablet, backgroundColor } = slideInfo;

  return (
    <div className={style['banner-slide']} style={{ backgroundColor }}>
      <div className={style['banner-slide__to-order']}>
        <h3 className={style['banner-slide__to-order-title']}>
          Now available in our store! &#128076;
        </h3>

        <p className={style['banner-slide__to-order-paragraph']}>
          Be the first!
        </p>
        <a href="#" className={style['banner-slide__to-order-link']}>
          Order now
        </a>
      </div>

      <picture className={style['banner-slide__picture']}>
        <source media="(min-width: 640px)" srcSet={imgPathTablet} />
        <source media="(max-width: 639px)" srcSet={imgPathMobile} />
        <img alt="Iphone 16" className={style['banner-slide__img']} />
      </picture>
    </div>
  );
};
