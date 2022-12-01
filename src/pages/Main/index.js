import React, { useEffect, useState } from 'react';
import { MainContainer, VideoWrap, MediaDetail } from './style';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Row from 'Row';
import requests from 'requests';
import intern from 'assets/images/intern.png';
import Video from "react-player";
import axios from 'axios';

const Main = () => {
    const url = "https://youtu.be/bwylOLy5ir0";
    const API_KEY = 'ade4d8200b5fce37d7401ffb7f381d9f';
    
    const [movie, setMovie] = useState([]);
    const [endMovie, setEndMovie] = useState(false);
    
    document.cookie = "safeCookie1=foo; SameSite=None; Secure"
    document.cookie = "safeCookie2=foo; SameSite=None; Secure"

    useEffect(() => {

        async function fetchData(){
            const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
            if(res.status === 404) return;
            console.log(res.data.results)
            setMovie(res.data.results);
            const data = await axios.get(`https://api.themoviedb.org/3/movie/${436270}/keywords?api_key=${API_KEY}`)
            console.log(data)
            
        }
        
        fetchData();
    
    },[])

    const Movietitle = () => {
        const title = movie.map((tem, idx) => {
            
            return (idx < 1 &&
                <MediaDetail key={idx}>
                    <dl>
                        <dt>{tem.title}</dt>
                        <dd>{tem.overview}</dd>
                    </dl>
                </MediaDetail>
            )}
            
        )
            
        return title;
    }
   
    return (
        <MainContainer>
            <Header />
            <div>
                <article>
                        <Movietitle />
                   
                    {endMovie ? 
                        <img src={intern} alt="visualImg" />
                        :
                        <>
                            <VideoWrap >
                                <Video url={url} playing={false} muted={false} width="100%" height="100%" onEnded={e => setEndMovie(!endMovie)} controls={true} />
                            </VideoWrap>
                        </>
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
