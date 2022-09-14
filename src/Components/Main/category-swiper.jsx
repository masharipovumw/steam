import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default function Categoty() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <div className='categoty-cart'>
                        <img
                            src='./img/racing.png'
                            alt=''
                            className='category_img'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='categoty-cart'>
                        <img
                            src='./img/strategy.png'
                            alt=''
                            className='category_img'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='categoty-cart'>
                        <img
                            src='./img/action.png'
                            alt=''
                            className='category_img'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='categoty-cart'>
                        <img
                            src='./img/puzzle.png'
                            alt=''
                            className='category_img'
                        />
                        <div className='bg-color'>
                            <h2>Головоломка</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
