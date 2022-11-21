import React, { useEffect, useState } from 'react';
import { MainContainer } from './style';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Row from 'Row';
import axios from 'axios.js';
import requests from 'requests';
import intern from 'assets/images/intern.png';

const Main = () => {
    // const [img, setImg] = useState([]);
    // const base_url = "https://image.tmdb.org/t/p/original/";

    // useEffect(() => {

    //     movieData();
    // }, [])

    // const movieData = async() => {
    //     const request = await axios.get(requests.fetchDocumentaries);
    //     setImg(request.data.results);
    //     return request;
    // }

    // const poster = img.map(e => e.poster_path)

    return (
        <MainContainer>
            <Header />
            <div>
                <article>
                    <img src={intern} alt="visualImg" />
                </article>
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            </div>
        <Footer />

        </MainContainer>
    );
};

export default Main;
