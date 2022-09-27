import React from "react";
import { Link } from "react-router-dom";

function Navlink (props){
    return (
        <>
            <Link to={props.Link} className="Navlink">
                 {props.title}
            </Link> 
        </>
    );
}

export default Navlink;