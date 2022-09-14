import React from 'react'
import Categoty from './category-swiper'
import Gameslider from './gameslider'
import Maintitle from './Maintitle'
import Slider from './Main_slider'

export default function Main() {
    return (
        <div className='main'>
            <div className='container'>
                <Maintitle />
                <Slider />
                <Maintitle />
                <Gameslider />
                <Categoty/>
            </div>
        </div>
    )
}
