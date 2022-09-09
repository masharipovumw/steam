import React from 'react';

function HeaderNav (props){
    return (
        <>
            <a href="#" className="nav_link">
                 {props.title}
            </a> 
        </>
    );
}

export default HeaderNav;
