import React from 'react';

const TitleComponent = (props) => {
    return (
        <div className='container'>
            <h3>
                {props.title}
            </h3> 
        </div>
    );
}

export default TitleComponent;
