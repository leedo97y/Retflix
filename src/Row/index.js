import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios.js';
// 리액트 아이콘 import
import {
    IoIosArrowDropdown,
    IoMdArrowDroprightCircle,
    IoMdAddCircleOutline,
    IoMdThumbsUp,
} from 'react-icons/io';
import { Container } from './style';
import Modal from 'components/Modal';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieImg, setMovieImg] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [overview, setOverview] = useState('');
    const openModal = (title, largeImg, img, releaseDate, overview) => {
        setModalOpen(true);
        setMovieTitle(title);
        setMovieImg(isLargeRow ? largeImg : img);
        setReleaseDate(releaseDate);
        setOverview(overview);
        console.log(title);
    };


    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            
        }
        fetchData();
    }, [fetchUrl]);

    useEffect(() => {
        async function axiosData(){
            const API_KEY = "ade4d8200b5fce37d7401ffb7f381d9f";
            const idd = movies.map(e => e.id);
            // const res = await axios.get(`https://api.themoviedb.org/3/movie/${76669}?api_key=${API_KEY}&language=en-US`);
          
            // const res = await axios.get(`https://api.themoviedb.org/3/movie/${76669}/videos?api_key=${API_KEY}&language=en-US`);
        }
        axiosData();
        
    },[])
    


    return (
        <>
        <Container>
            <strong>{title}</strong>

            <div className="rowLines">
                {movies.map(movie => {
                
                return(
                    <div className="content" key={movie.id}>
                        <img
                            className={`rowLineItem ${isLargeRow && 'imgSizeLarge'}`}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                        <div className="icons" >
                            <span className="left">
                                <IoMdArrowDroprightCircle />
                                <IoMdAddCircleOutline />
                                <IoMdThumbsUp />
                            </span>
                            <span className="right">
                                <IoIosArrowDropdown
                                    onClick={() => {
                                        openModal(
                                            movie.name,
                                            movie.poster_path,
                                            movie.backdrop_path,
                                            movie.first_air_date,
                                            movie.overview,
                                        );
                                    }}
                                />
                            </span>
                        </div>
                    </div> 
                    )
                })}
            </div>
            </Container>
            
            {modalOpen && (
                <Modal
                    closeModal={closeModal}
                    movieTitle={movieTitle}
                    img={movieImg}
                    releaseDate={releaseDate}
                    overview={overview}
                ></Modal>
            )}
        </>
    );
};

export default Row;
