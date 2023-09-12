import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './home/Movie'
import Section1 from '../dist/Section1'
import Section2 from '../dist/Section2'

const Home = () => {
   const [isLoading, setLoading] = useState(true)
   const [appMovie, setAppMovie] = useState([])

   const getMovies = async () => {
      try {
         const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR')
         setAppMovie(response.data.results)
         setLoading(false)
      } catch (error) {
         console.error('Error fetching movies:', error)
         setLoading(false)
      }
   }

   useEffect(() => {
      getMovies()
   }, [])

   return (
      <div id='Home'>
         {/* 메인 동영상 */}
         <Section1 />
         <Section2 />

         {isLoading ? (
            <div className='movieList'>
               <span className='load'>'Loading...'</span>
            </div>
         ) : (
            <div className='movieList'>
               <h1>현재 상영 영화는 실시간으로 업데이트 됩니다.</h1>

               {appMovie.map((movie) => (
                  <Movie id={movie.id} title={movie.title} posterPath={movie.poster_path} date={movie.release_date} />
               ))}
            </div>
         )}
      </div>
   )
}

export default Home
