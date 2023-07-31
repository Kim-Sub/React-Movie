import React, { useEffect, useRef } from "react"
import Typed from "typed.js"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Section1Typed from "./Section1Typed"

const Section1Slick = () => {
    // 슬릭의 옵션 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            // 반응형 세팅을 위한 세팅
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <Slider {...settings} className='slickSlider'>
            <div>
                <Section1Typed></Section1Typed>
                <video id='mainVideo' autoplay muted loop controls>
                    <source
                        src={require("../video/mainVideo.mp4")}
                        type='video/mp4'
                    />
                </video>
            </div>

            <div>
                <img src={require("../img/mainSlide1.jpg")} alt='이미지1' />
            </div>

            <div>
                <img src='이미지URL3' alt='이미지3' />
            </div>
        </Slider>
    )
}

export default Section1Slick
