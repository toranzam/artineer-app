import React from 'react';
import Slider from "react-slick";
import mainSlider1 from "../assets/mainSlider1.png"
import mainSlider2 from "../assets/mainSlider2.png"
import {Link} from "react-router-dom";

function FrontSliderComponent(props) {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "front-slider-items"
    }

    return (
        <div>
            <Slider {...settings} >
                <div className="front-slider-items">
                    <div className="front-slider-item" style={{background: "#F8EFE4"}}>
                        <div className="front-slider-item-wrap">
                            <img src={mainSlider1}/>
                        </div>
                    </div>
                </div>
                <div className="front-slider-items">
                    <div className="front-slider-item" style={{background: "#C0392B"}}>
                        <div className="front-slider-item-wrap">
                            <img src={mainSlider2}/>
                        </div>
                    </div>
                </div>

            </Slider>
            {/*<div>*/
            }
            {/*    <img src={process.env.PUBLIC_URL + '/mainSlider1.png'}/>*/
            }
            {/*</div>*/
            }
            {/*<div>*/
            }
            {/*    <img src={process.env.PUBLIC_URL + '/mainSlider2.png'}/>*/
            }
            {/*</div>*/
            }

        </div>
    )
        ;
}

export default FrontSliderComponent;