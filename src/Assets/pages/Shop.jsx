import React from 'react'
import ForTitle from '../../Components/For-title'
import Gamecatalog from '../../Components/Main/Gamecatalog'

const Shop = () => {
    return (
        <div>
            <div className='shop_wrapper'>
                <div className='container'>
                    <ForTitle
                        title='Horror'
                    />
                    <Gamecatalog
                        img='./img/spider-men.jpg'
                        game='Spider Man Remastred'
                        version='for windows 10'
                        price='10 $'
                    />
                </div>
            </div>
        </div>
    )
}

export default Shop
