import React from "react";

function Navlink (props){
    return (
        <>
            <a href="#" className="Navlink">
                 {props.title}
            </a> 
        </>
    );
}

export default Navlink;