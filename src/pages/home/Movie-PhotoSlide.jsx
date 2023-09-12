import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviePhotoSlide = ({ images }) => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   }

   return (
      <Slider {...settings}>
         {images.map((image, index) => (
            <div key={index}>
               <img src={`https://image.tmdb.org/t/p/w1280/${image.file_path}`} alt={`${index}`} />
            </div>
         ))}
      </Slider>
   )
}

export default MoviePhotoSlide
