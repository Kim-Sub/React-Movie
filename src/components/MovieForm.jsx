import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle]=useState('');
    const [movieYear, setMovieYear]=useState('');
    const [titleError, settiTleError]=useState('');
    const [yearError, setYearError]=useState('');
    const resetForm=()=>{
      setMovieTitle('');
      setMovieYear('');
    }
    const validateForm=() =>{
      resetErrors();
      let validated=true;
      if(!movieTitle){
        settiTleError('영화제목을 넣어주세요')
        validated=false;
      }
      if(!movieYear){
        setYearError('상영연도를 넣어주세요')
        validated=false;
      }

      return validated;
    }
    const resetErrors=() =>{
      settiTleError('');
      setYearError('')
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(validateForm()){
          addMovie({
            id:Date.now(),
            title: movieTitle,
            year: movieYear
          });
          resetErrors();
          resetForm();
        }
        
          
      
    
      }

    return (
        <form onSubmit={onSubmit}>
          <input type="text" placeholder='영화제목'  value={movieTitle} onChange={e=>setMovieTitle(e.target.value)} /> <br />
          <div className='err'>{titleError}</div>
          <input type="text" placeholder='상영년도'  value={movieYear} onChange={e=>setMovieYear(e.target.value)} /> <br />
          <div className='err'>{yearError}</div>
          <button type="submit">보고싶은 영화 추가</button>
       </form>
       
    );
};

export default MovieForm;