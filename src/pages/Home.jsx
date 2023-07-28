import React, { useEffect, useState } from "react"
import axios from "axios"
import Appmovie from "../components/Appmovie"
import styles from "../scss/Home.module.scss"
import Section1 from "../dist/Section1"



const Home = () => {
    const [isLoading, setLoading] = useState(true)
    const [appMovie, setAppMovie] = useState([])

    const getMovies = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR"
            )
            setAppMovie(response.data.results)
            setLoading(false)
            /*  console.log(response) */
        } catch (error) {
            console.error("Error fetching movies:", error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            {isLoading ? (
                <div>
                    <span className='load'>'Loading...'</span>
                </div>
            ) : (
                <div className={styles.appWrap}>
                    <Section1></Section1>
                    {appMovie.map((amovie) => (
                        <Appmovie
                            id={amovie.id}
                            title={amovie.title}
                            posterPath={amovie.poster_path}
                            date={amovie.release_date}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
