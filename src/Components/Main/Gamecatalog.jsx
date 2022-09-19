import React from 'react'

const Gamecatalog = (props) => {
    return (
        <div>
            <div className='catalog-item'>
                <div className='catalog-style'>
                    <div className='cate-img'>
                        <img
                            src={props.img}
                            alt=''
                            className='img-cate'
                        />
                    </div>
                    <div className='cate-title'>
                        <h4 className='title-cate'>{ props.game}</h4>
                        <h4 className='title-cate'> { props.version}</h4>
                    </div>
                    <div className='cate-price'>
                        <button className='prici-btn'>{props.price}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gamecatalog
