import React from 'react'
import GameList from '../../Components/Game-list'

const Help = () => {
    return (
        <div>
            <div className='container'>
                <div className='help-page'>
                    <div className='top-title'>
                        <h3 style={{color:'#5EAFC7'}}>ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
                        <div className='game-list'>
                            <GameList
                                img='./img/csgo-icon.png'
                                title='Counter-Strike: Global Offensive'
                            />
                            <GameList
                                img='./img/dota2_icon.jpg'
                                title='dota 2'
                            />
                            <GameList
                                img='./img/pubg_icon.jpg'
                                title='PUBG: BATTLEGROUNDS'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
