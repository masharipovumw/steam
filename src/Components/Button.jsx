import React from 'react';

function Button(title) {
    return (
        <>
            <button className='cart-title'>
                 {title.title}
            </button>
        </>
    );
}

export default Button;
