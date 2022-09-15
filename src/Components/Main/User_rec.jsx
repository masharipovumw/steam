import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Userrec() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./img/spider-men.jpg"  className="user_rec" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/mafia.jpg" className="user_rec" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/fifa.jpg" className="user_rec" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
