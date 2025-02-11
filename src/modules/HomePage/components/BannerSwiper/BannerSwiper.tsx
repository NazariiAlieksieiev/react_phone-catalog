/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper as SwiperInstance } from 'swiper';
import { BannerSlide } from '../BannerSlide/BannerSlide';

import 'swiper/scss';
import 'swiper/css/a11y';
import 'swiper/scss/pagination';
import style from './BannerSwiper.module.scss';
import { Slide } from '../../../shared/types/types';
import { fetchJson } from '../../../shared/utils/fetchJSON';

const slidesFromApiPromise = fetchJson<Slide[]>('banner_slides.json');

export const BannerSwiper: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [slides, setSlides] = useState<Slide[] | []>([]);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const slidesFromApi = await slidesFromApiPromise;

        if (slidesFromApi) {
          setSlides(slidesFromApi);
        }
      } catch (error) {
        console.error('Failed to load slides:', error);
      }
    };

    loadSlides();
  }, []);

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style['banner-swiper__container']}>
      <button
        className={style['banner-swiper__button-left']}
        onClick={() => {
          swiper?.slidePrev();
        }}
      ></button>
      <Swiper
        className={style['banner-swiper--custom-padding']}
        onSwiper={setSwiper}
        modules={[Pagination, A11y, Autoplay, Mousewheel]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
          bulletActiveClass: style['custom-bullet-active'],
          bulletClass: style['custom-bullet'],
          renderBullet: (_, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={style['banner-swiper__slide']} key={index}>
            <BannerSlide slideInfo={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={style['banner-swiper__button-right']}
        onClick={() => {
          swiper?.slideNext();
        }}
      ></button>
    </div>
  );
};
