import React from 'react'
import Steamicon from '../../img/logo_steam'

const Steam = () => {
    return (
        <div className='container'>
            <div className='dowloand'>
                <div className='steam-title'>
                    <Steamicon />
                    <h2 style={{ color: 'white' }}>
                        Steam — превосходная платформа <br /> для игроков и
                        разработчиков.
                    </h2>
                    <div className='users'>
                        <ul style={{ color: '#A9A9A9', margin: '10px 0' }}>
                            В СЕТИ
                        </ul>
                        <h3 className='user'>21,494,059</h3>
                    </div>

                    <button className='Steam-btn'>Загрузить Steam</button>
                </div>
                <div className='steam-img'>
                    <div className="position"></div>
                    <img src='./img/portal.gif' alt='' className='Staem-gif' />
                </div>
            </div>
        </div>
    )
}

export default Steam
