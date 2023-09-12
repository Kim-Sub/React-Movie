import React from "react"
import { Link } from "react-router-dom"

const Movie = ({ id, title, posterPath, date }) => {
    return (
        <div key={id} className="Movie">

            <Link to={`/MovieDetail/${id}`}>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
                <p>{date}</p>
            </Link>
            
        </div>
    )
}

export default Movie
