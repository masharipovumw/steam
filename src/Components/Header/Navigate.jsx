import React from 'react'
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
                <input type='text' placeholder='search' />
            </div>
        </div>
    )
}

export default Navigate
