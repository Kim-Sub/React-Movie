import React from "react"
import { Link } from "react-router-dom"

const Movie = ({ id, title, posterPath, date, score }) => {
    return (
        <div key={id} className="Movie">

            <Link to={`/MovieDetail/${id}`}>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
                <p>평점　:　{score}</p>
                <p>개봉일　:　{date}</p>
            </Link>
            
        </div>
    )
}

export default Movie
