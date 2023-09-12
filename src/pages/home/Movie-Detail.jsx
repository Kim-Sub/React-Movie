import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Modal from '../../components/Modal';

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

   const movieDetail = loading ? (
      <div>로딩중...</div>
   ) : (
      <div>
         <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
         <div className='overview'>{movie.overview}</div>
         <div className='voteAverage'>{movie.vote_average}</div>
      </div>
   );

   const movieTrailer = trailers.map((trailer) => (
      <div key={trailer.key}>
         <iframe width='1280' height='700' src={`https://www.youtube.com/embed/${trailer.key}`} title={trailer.name} frameBorder='0' allowFullScreen></iframe>
      </div>
   ));

   const imageList = images.map((image, index) => (
      <img key={index} src={`https://image.tmdb.org/t/p/w1280/${image.file_path}`} alt={`${index}`} />
   ));

   const reviewList = reviews.map((review) => (
      <div key={review.id}>
         <h3>{review.author}</h3>
         <p>{review.content}</p>
      </div>
   ));

   
   return (
      <div id='MovieDetail'>
         {movieDetail}
         {movieTrailer}
         <h3 onClick={handleOpenModal}>영화 이미지 목록 모달클릭</h3>
         <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={
            <div>{imageList}</div>
         } />
         
         <h3>영화 리뷰</h3>
         {reviewList}
      </div>
   );
}

export default MovieDetail;
