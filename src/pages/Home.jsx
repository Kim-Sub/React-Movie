import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './home/Movie';
import Section1 from '../dist/Section1';
import Section2 from '../dist/Section2';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [appMovie, setAppMovie] = useState([]);
  const [sortByScore, setSortByScore] = useState(false);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR'
      );
      setAppMovie(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const toggleSort = () => { // 기본순, 평점순 텍스트 토글
    setSortByScore(!sortByScore);
  };
  // 평점 순으로 정렬된 영화 목록 가져오기
  const sortedMovies = appMovie.slice().sort((a, b) => b.vote_average - a.vote_average);



  return (
    <div id='Home'>
      {/* 메인 동영상 */}
      <Section1 />
      <Section2 />

      {isLoading ? (
        <div className='movieList'>
          <span className='load'>Loading...</span>
        </div>
      ) : (
        <div className='movieList'>
          <h1>현재 상영 영화는 실시간으로 업데이트 됩니다.</h1>
          <p onClick={toggleSort}>
            {sortByScore ? '기본 순으로 보기' : '평점 순으로 보기'}
          </p>

          <div>
            {sortByScore
              ? sortedMovies.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    posterPath={movie.poster_path}
                    date={movie.release_date}
                    score={movie.vote_average}
                  />
                ))
              : appMovie.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    posterPath={movie.poster_path}
                    date={movie.release_date}
                    score={movie.vote_average}
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
