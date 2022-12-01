import React, { useState } from 'react';
import { Nav, LeftSide, RightSide, ImageDiv, ProfileDiv, SearchDiv } from './style';
import Logo from 'assets/images/Logo.png';
import Search from 'assets/images/search.png';
import Profile from 'assets/images/bubbleProfile.jpg';

const Header = () => {
    // const [text, setText] = useState('');
    const [show, setShow] = useState('false');
    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(fetchUrl);
    //         setMovies(request.data.results);
    //         console.log(request);
    //         // console.log(request.data.results[0].title);
    //         return request;
    //     }
    //     fetchData();
    // }, [fetchUrl]);

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
                                show === 'false' ? setShow('true') : setShow('false');
                            }}
                        />
                        {show === 'true' && (
                            <input
                                className={show ? 'showInput' : 'hideInput'}
                                id="searchInput"
                                type="text"
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
