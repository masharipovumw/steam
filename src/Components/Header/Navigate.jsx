import React from 'react'
import Steamicon from '../../img/Search'
import Navlink from './Navigate_link'

function Navigate(props) {
    return (
        <div className='container'>
            <div className='navigate'>
                <div className='navigate_menu'>
                    <Navlink title='наш магазин' />
                    <Navlink title='новые и примечательные' />
                    <Navlink title='категории' />
                    <Navlink title='магазин очков' />
                    <Navlink title='новости' />
                    <Navlink title='лаборатории' />
                </div>
                <div className='text'>
                    <input type='text' placeholder='search' />
                    <button className='search_btn'>
                        <Steamicon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigate
