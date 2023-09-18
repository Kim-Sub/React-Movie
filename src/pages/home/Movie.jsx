import React from "react"
import { Link } from "react-router-dom"
// 아이콘 import
import { HiThumbUp } from "react-icons/hi"; 
import { HiTrendingUp } from "react-icons/hi"; 

const Movie = ({ id, title, posterPath, date, score }) => {
    let scoreStyle = {
        color: "inherit",
        fontWeight: "inherit"
    };

    let HIT = null;

    if (score >= 8) {
        scoreStyle = {
            color: "#E81D36",
            fontWeight: "bold"
        };
        HIT = <span className="HIT"><HiThumbUp /></span>;
    } else if (score >= 7) {
        scoreStyle = {
            color: "#ff8800", 
            fontWeight: "bold"
        };
        HIT = <span className="HIT"><HiTrendingUp /></span>;
    }

    return (
        <div key={id} className="Movie">
            <Link to={`/MovieDetail/${id}`}>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
                <p style={scoreStyle}>평점　:　{score}　{HIT}</p>
                <p>개봉일　:　{date}</p>
            </Link>
        </div>
    )
}

export default Movie
