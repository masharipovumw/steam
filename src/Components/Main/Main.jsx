import React from 'react'
import Categoty from './category-swiper'
import Gameslider from './gameslider'
import Maintitle from './Maintitle'
import Slider from './Main_slider'
import Userrec from './User_rec'

export default function Main() {
    return (
        <div className='main'>
            <div className='container'>
                <Maintitle title='ПОПУЛЯРНОЕ И РЕКОМЕНДУЕМОЕ' />
                <Slider />
                <Maintitle title ='СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ'/>
                <Gameslider />
                <Maintitle title ='ПОИСК ПО КАТЕГОРИЯМ И НЕ ТОЛЬКО' />
                <Categoty />
                <Maintitle title ='ВАШ СПИСОК РЕКОМЕНДАЦИЙ' />
                <Userrec/>
            </div>
        </div>
    )
}
