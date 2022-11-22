import React, { useEffect, useState } from 'react';
import { MainContainer } from './style';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Row from 'Row';
import axios from 'axios.js';
import requests from 'requests';
import intern from 'assets/images/intern.png';
import Video from "react-player";

const Main = () => {


    return (
        <MainContainer>
            <Header />
            <div>
                <article>
                    <img src={intern} alt="visualImg" />
                    {/* <Video url={url} playing={true} /> */}
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
