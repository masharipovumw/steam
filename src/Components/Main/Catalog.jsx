import React from 'react'
import Gamecatalog from './Gamecatalog'

const Catalog = () => {
    return (
        <>
            <Gamecatalog
                img='./img/spider-men.jpg'
                game='Spider Man Remastred'
                version='for windows 10'
                price='10 $'
            />
            <Gamecatalog
                img='./img/fifa.jpg'
                game='fifa 2023'
                version='for playstation 5 or 4'
                price='20 $'
            />
            <Gamecatalog
                img='./img/callofduty.jpg'
                game='call of duty modern warfare ||'
                version='for windows 7 ...'
                price='free'
            />
        </>
    )
}

export default Catalog
