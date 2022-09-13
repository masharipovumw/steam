import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import Button from '../Button'

export default function Gameslider() {
    return (
        <div className='margin'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <div className='card'>
                        <div className='cart_img'>
                            <img
                                src='./img/callofduty.jpg'
                                alt=''
                                className='cart-img'
                            />
                        </div>
                        <div className='card_title'>
                            <h2>call of duty</h2>
                            <p className='p'>Заканчивается 15 сен в 22:00.</p>
                            <Button title='-10%' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='cart_img'>
                            <img
                                src='./img/pes.jpg'
                                alt=''
                                className='cart-img'
                            />
                        </div>
                        <div className='card_title'>
                            <h2>efutbool 2022</h2>
                            <p className='p'>Заканчивается 20 сен в 00:00.</p>
                            <Button title='buy for free' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='cart_img'>
                            <img
                                src='./img/rdr.jpg'
                                alt=''
                                className='cart-img'
                            />
                        </div>
                        <div className='card_title'>
                            <h2>rdr 2</h2>
                            <p className='p'>rockstar.</p>
                            <Button title='-5%' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='cart_img'>
                            <img
                                src='./img/forza.jpg'
                                alt=''
                                className='cart-img'
                            />
                        </div>
                        <div className='card_title'>
                            <h2>forza harizon</h2>
                            <p className='p'>Заканчивается 1 сен в 22:00.</p>
                            <Button title='free' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='cart_img'>
                            <img
                                src='./img/mafia.jpg'
                                alt=''
                                className='cart-img'
                            />
                        </div>
                        <div className='card_title'>
                            <h2>mafia d.e </h2>
                            <p className='p'>2k</p>
                            <Button title='bithday mafia' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>
                        <div className='cart_img'>
                            <img
                                src='./img/sims.png'
                                alt=''
                                className='cart-img'
                            />
                        </div>
                        <div className='card_title'>
                            <h2>sims 4</h2>
                            <p className='p'>ea games</p>
                            <Button title='classic game' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
