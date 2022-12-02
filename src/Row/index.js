import React, { useState, useEffect } from 'react';
import axios from 'axios.js';
import {
    IoIosArrowDropdown,
    IoMdArrowDroprightCircle,
    IoMdAddCircleOutline,
    IoMdThumbsUp,
} from 'react-icons/io';
import { Container } from './style';
import Modal from 'components/Modal';
import { Link } from 'react-router-dom';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieImg, setMovieImg] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [overview, setOverview] = useState('');
    const [active, setActive] = useState(false);
    const [color, setColor] = useState("gray");

    const openModal = (title, largeImg, img, releaseDate, overview) => {
        setModalOpen(true);
        setMovieTitle(title);
        setMovieImg(isLargeRow ? largeImg : img);
        setReleaseDate(releaseDate);
        setOverview(overview);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            const res = request.data.results;
            const fil = res.filter((e) => e.title);
            setMovies(fil);
            
            
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <>
            <Container>
                <strong>{title}</strong>

                <div className="rowLines">
                    {movies.map(movie => {
                            
                        return (
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
                                        <Link to="/video">
                                            <IoMdArrowDroprightCircle />{' '}
                                        </Link>
                                        <IoMdAddCircleOutline />
                                        <IoMdThumbsUp onClick={(e) => {
                                            setActive(!active);
                                            e.target.style.color = active? "skyblue" : "gray";
                                            setColor(e.target.style.color);
                                            
                                            console.log("aaaaaaa")
                                        }} />
                                    </span>
                                    <span className="right">
                                        <IoIosArrowDropdown
                                            onClick={() => {
                                                openModal(
                                                    movie.name || movie.title,
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
                    color={color}
                ></Modal>
            )}
        </>
    );
};

export default Row;
