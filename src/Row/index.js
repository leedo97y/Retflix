import React, { useState, useEffect } from 'react';
import axios from 'axios.js';
// 리액트 아이콘 import
import {
    IoIosArrowDropdown,
    IoMdArrowDroprightCircle,
    IoMdAddCircleOutline,
    IoMdThumbsUp,
} from 'react-icons/io';
import { Container } from './style';
import Modal from '../components/Modal';

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
            console.log(request);
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
                ))}
            </div>
            {modalOpen && (
                <Modal
                    closeModal={closeModal}
                    movieTitle={movieTitle}
                    img={movieImg}
                    releaseDate={releaseDate}
                    overview={overview}
                ></Modal>
            )}
        </Container>
    );
};

export default Row;
