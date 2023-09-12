import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Modal from '../../components/Modal';
import MoviePhotoSlide from './Movie-PhotoSlide';


const MovieDetail = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState(null);
   const [trailers, setTrailers] = useState([]);
   const [reviews, setReviews] = useState([]);
   const [images, setImages] = useState([]);
   const [loading, setLoading] = useState(true);

   // 모달 컴포넌트
   const [isModalOpen, setIsModalOpen] = useState(false);
   const handleOpenModal = () => {
     setIsModalOpen(true);
   };
   const handleCloseModal = () => {
     setIsModalOpen(false);
   };

   useEffect(() => {
      const fetchData = async () => {
         try {
            const [movieResponse, trailersResponse, imagesResponse, reviewsResponse] = await Promise.all([
               axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR`),
               axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR`),
               axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=4ed08358326bfbef17487ba953a86239`),
               axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4ed08358326bfbef17487ba953a86239`),
            ]);

            setMovie(movieResponse.data);
            setTrailers(trailersResponse.data.results.slice(0, 1));
            setImages(imagesResponse.data.backdrops);
            setReviews(reviewsResponse.data.results);
            setLoading(false);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, [id]);


   const movieTrailer = trailers.map((trailer) => (
      <div key={trailer.key}>
         <iframe width='1280' height='700' src={`https://www.youtube.com/embed/${trailer.key}`} title={trailer.name} frameBorder='0' allowFullScreen></iframe>
      </div>
   ));

   const movieDetail = loading ? (
      <div>로딩중...</div>
   ) : (
      <div>
         <div className='overview'>{movie.overview}</div>
         <div className='voteAverage'>{movie.vote_average}</div>
      </div>
   );


   const reviewList = reviews.map((review) => (
      <div key={review.id}>
         <h3>{review.author}</h3>
         <p>{review.content}</p>
      </div>
   ));

   
   return (
      <div id='MovieDetail'>

         <div className='Detail1'>
            {movieTrailer}
            {movieDetail}
            <h3 onClick={handleOpenModal}>영화 포토 보기</h3>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={
               <MoviePhotoSlide images={images} className='Movie-Photo' />
            } />
         </div>
         
         <div className='Detail2'>
            <h3>영화 리뷰</h3>
            {reviewList}
         </div>

      </div>
   );
}

export default MovieDetail;
