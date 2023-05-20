import React from 'react';
import cls from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard/ProductCard';
import 'swiper/css';

const ProductSlider = () => {
  return (
    <div className='my-4'>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className={cls('pb-5 swiper-bar')}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
