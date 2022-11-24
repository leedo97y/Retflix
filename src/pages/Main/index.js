import React, { useEffect, useState } from 'react';
import { MainContainer, VideoWrap } from './style';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Row from 'Row';
import requests from 'requests';
import intern from 'assets/images/intern.png';
import Video from "react-player";

const Main = () => {
    const url = "https://youtu.be/bwylOLy5ir0";

    const [endMovie, setEndMovie] = useState(false);
    
    document.cookie = "safeCookie1=foo; SameSite=None; Secure"
    document.cookie = "safeCookie2=foo; SameSite=None; Secure"

    return (
        <MainContainer>
            <Header />
            <div>
                <article>
                    {endMovie ? 
                        <img src={intern} alt="visualImg" />
                        :
                        <VideoWrap>
                            <Video url={url} playing={true} muted={true} width="100%" height="100%" onEnded={e => setEndMovie(!endMovie)} />
                        </VideoWrap>
                    }
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
