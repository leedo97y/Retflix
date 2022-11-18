import React, {useState, useEffect} from "react";
import axios from "axios.js";
import { Container } from "./style";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) =>{
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <Container>
            <h2>{title}</h2>
  
            <div className="rowLines">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`rowLineItem ${isLargeRow && "imgSizeLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
      </Container>
  
    )
}



export default Row;