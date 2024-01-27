import React from 'react';
import {Link} from "react-router-dom";
import '../styles/ButtonComponent.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/FrontSliderComponent.scss"


function ButtonComponent({title, to }) {
    return (
        <Link to={to} className="btn">{title}</Link>
    );
}

export default ButtonComponent;