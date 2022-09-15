import React from 'react';
import TitleComponent from './Titlecomponent';

const Maintitle = (props) => {
    return (
            <div className='container'>
                <h2 className='h3'>
                    {props.title}
                </h2> 
            </div>
    );
}

export default Maintitle
