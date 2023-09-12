import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(''); // 사용자 입력을 위한 상태
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장할 상태

  const handleSearch = async () => {
    try {
      // TMDB API에서 검색 결과를 가져옵니다.
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div id='Search'>
      <h2>영화 검색</h2>
      <input
        type='text'
        placeholder='영화 제목을 입력하세요'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      <div className='searchResults'>
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>평점: {movie.vote_average}</p>
            {/* 필요한 다른 정보 표시 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
