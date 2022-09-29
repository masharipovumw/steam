import React from 'react'

function GameList(props) {
    return (
        <div className='gams_list'>
            <div className='game_list'>
                <div className='game_img'>
                    <img src={props.img} className='game-img' alt='' />
                </div>
                <div className='game_title'>
                    <h3>
                        {props.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default GameList
