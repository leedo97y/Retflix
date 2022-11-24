import React, { useState, useEffect } from 'react';
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
        console.log(title);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            // console.log(request.data.results[0].title);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <Container>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <div className="content">
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                        <div className="icons">
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
                ))}
            </div>
            <Modal
                open={modalOpen}
                close={closeModal}
                movieTitle={movieTitle}
                img={movieImg}
            ></Modal>
        </Container>
    );
};

export default Row;
