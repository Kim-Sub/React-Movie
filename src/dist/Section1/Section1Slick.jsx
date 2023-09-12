import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Section1Typed from './Section1Typed'

import React, { useEffect } from 'react';

const Section1Slick = () => {
    // 페이지 로드시 비디오 자동재생
    useEffect(() => {
        const video = document.getElementById('mainVideo');
        video.play();
    }, []);

   // 슬릭의 옵션 설정
   const settings = {
      dots: true, infinite: true,
      speed: 500, slidesToShow: 1, slidesToScroll: 1,
   }

   return (
      <Slider {...settings} className='Section1Slick'>
         <div>
            <Section1Typed></Section1Typed>
            <video id='mainVideo' autoPlay muted loop>
               <source src={require('../../video/mainVideo.mp4')} type='video/mp4' />
            </video>
         </div>

         <div>
            <img src={require('../../img/mainSlide1.jpg')} alt='이미지1' />
         </div>

         <div>
            <img src={require('../../img/mainSlide2.jpg')} alt='이미지2' />
         </div>

         <div>
            <img src={require('../../img/mainSlide3.jpg')} alt='이미지3' />
         </div>


      </Slider>
   )
}

export default Section1Slick
