import React from 'react'
import { Link } from 'react-router-dom'
import Steamicon from '../../img/logo_steam'
import Navigate from './Navigate'

function Header() {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header_row'>
                        <div className='header_icon'>
                            <Link to='/home'>
                                <Steamicon />
                            </Link>
                        </div>
                        <nav className='header_nav'>
                            <Link to='/shop'>
                                <h3 className='Navlink'>магазин</h3>
                            </Link>
                            <Link to='/group'>
                                <h3 className='Navlink'>СООБЩЕСТВO</h3>
                            </Link>
                            <Link to='/steam'>
                                <h3 className='Navlink'>О STEAM </h3>
                            </Link>
                            <Link to='/help'>
                                <h3 className='Navlink'>ПОДДЕРЖКА</h3>
                            </Link>
                        </nav>
                        <Link to= '/steam'>
                            <button className='dowlond'>установить STEAM</button>
                        </Link>
                    </div>
                </div>
            </header>
            <Navigate />
        </>
    )
}
export default Header
