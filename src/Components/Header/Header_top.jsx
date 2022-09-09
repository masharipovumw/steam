import React from 'react'
import Steam from '../../img/logo_steam'
import HeaderNav from './Header_nav'
import Navigate from './Navigate'

function Header() {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header_row'>
                        <div className='header_icon'>
                            <Steam />
                        </div>
                        <nav className='header_nav'>
                            <HeaderNav title='магазин' />
                            <HeaderNav title='сообщество' />
                            <HeaderNav title='о steam' />
                            <HeaderNav title='поддержка' />
                        </nav>
                        <button className='dowlond'>установить STEAM</button>
                    </div>
                </div>
            </header>
            <Navigate />
        </>
    )
}
export default Header
