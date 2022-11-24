import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container } from './style';
import Modal from 'components/Modal';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieImg, setMovieImg] = useState('');

    const openModal = (title, largeImg, img) => {
        setModalOpen(true);
        setMovieTitle(title);
        setMovieImg(isLargeRow ? largeImg : img);
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
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <FontAwesomeIcon icon={faCirclePlus} />
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </span>
                            <span className="right">
                                <FontAwesomeIcon
                                    icon={faCircleChevronDown}
                                    onClick={() => {
                                        openModal(
                                            movie.name,
                                            movie.poster_path,
                                            movie.backdrop_path,
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

        <Modal
                open={modalOpen}
                close={closeModal}
                movieTitle={movieTitle}
                img={movieImg}
        ></Modal>

        </>
    );
};

export default Row;
