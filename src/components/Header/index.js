import React, { useState, useEffect } from 'react';
import axios from 'axios.js';
import requests from 'requests';
import { Nav, LeftSide, RightSide, ImageDiv, ProfileDiv, SearchDiv } from './style';
import Logo from 'assets/images/Logo.png';
import Search from 'assets/images/search.png';
import Profile from 'assets/images/bubbleProfile.jpg';

const genre = requests.fetchHorrorMovies;

const Header = () => {
    // const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     async function getData() {
    //         const request = await axios.get(url);
    //         setMovies(request.data.results);
    //         return request;
    //     }
    //     getData();
    // }, [url]);

    return (
        <>
            <Nav>
                <ImageDiv>
                    <img id="logo" src={Logo} alt="NETFLIX" />
                </ImageDiv>
                <LeftSide>
                    <span>
                        <a href="/">홈</a>
                    </span>
                    <span>
                        <a href="/series">시리즈</a>
                    </span>
                    <span>
                        <a href="/movie">영화</a>
                    </span>
                    <span>
                        <a href="https://about.netflix.com/ko/new-to-watch">
                            NEW! 요즘 대세 콘텐츠
                        </a>
                    </span>
                    <span>
                        <a href="/like">내가 찜한 콘텐츠</a>
                    </span>
                </LeftSide>
                <RightSide>
                    <SearchDiv>
                        <img
                            id="searchImg"
                            src={Search}
                            alt="search"
                            show={show}
                            onClick={() => {
                                !show ? setShow(true) : setShow(false);
                            }}
                        />
                        {show && (
                            <input
                                className={show ? 'showInput' : 'hideInput'}
                                id="searchInput"
                                type="text"
                                // value={text}
                                // onChange={e => {
                                //     e.preventDefault();
                                //     setText(e.target.value);
                                //     console.log(text);

                                //     console.log(movies);
                                // }}
                            />
                        )}
                    </SearchDiv>

                    <ProfileDiv>
                        <img id="profileImg" src={Profile} alt="profile" />
                        <select id="select">
                            <option></option>
                            <option>계정관리</option>
                        </select>
                    </ProfileDiv>
                </RightSide>
            </Nav>
        </>
    );
};

export default Header;
