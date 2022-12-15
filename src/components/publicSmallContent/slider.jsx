import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCreative } from "swiper";
import "swiper/css/effect-creative";

const Slider = () => {
    return ( 
        <>
        <Swiper
         modules={[Navigation , Pagination , EffectCreative ]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={1}
        slidesPerView={1}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}

    >
      <SwiperSlide><img src="./img/Metronic.jpg" class="card-img-top rounded" alt="..."/></SwiperSlide>
      <SwiperSlide><img src="./img/Metronic.jpg" class="card-img-top rounded" alt="..."/></SwiperSlide>
    </Swiper>
        </>
     );
}
 
export default Slider;