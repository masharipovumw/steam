import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import TitleComponent from './Titlecomponent'

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
                id='mySwiper'
            >
                <SwiperSlide>
                    <img src='./img/dota.jpg' alt='dota'className='slider_img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./img/csgo.jpg' alt='csgo' className='slider_img'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./img/fifa.jpg' alt='csgo' className='slider_img'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./img/gtav.jpg' alt='csgo'className='slider_img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./img/spider-men.jpg' alt='csgo'className='slider_img' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
