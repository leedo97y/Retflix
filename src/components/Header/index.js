import React, { useState } from 'react';
import { Nav, LeftSide, RightSide, ImageDiv, ProfileDiv, SearchDiv } from './style';
import Logo from 'assets/images/Logo.png';
import Search from 'assets/images/search.png';

import Djyun from 'assets/images/djyun.jpeg';
import Dieno from 'assets/images/daino.jpeg';
import Rock from 'assets/images/rock2.png';
import Danbi from 'assets/images/danbi.jpg';
import Doy from 'assets/images/dooy.jpeg';

import { BiCaretDown } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { MdPublishedWithChanges } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState('');
    const [show, setShow] = useState('false');
    const [unfold, setUnfold] = useState('false');

    const handleChangeValue = e => {
        e.preventDefault();
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const handleMouseOver = () => {
        setUnfold('true');
    };

    const handleMouseLeave = () => {
        setUnfold('false');
    };

    return (
        <>
            <Nav>
                <ImageDiv>
                    <img id="logo" src={Logo} alt="NETFLIX" />
                </ImageDiv>
                <LeftSide>
                    <span>
                        <Link to="/">홈</Link>
                    </span>
                    <span>
                        <Link to="/">시리즈</Link>
                    </span>
                    <span>
                        <Link to="/">영화</Link>
                    </span>
                    <span>
                        <Link to="https://about.netflix.com/ko/new-to-watch">
                            NEW! 요즘 대세 콘텐츠
                        </Link>
                    </span>
                    <span>
                        <Link to="/">내가 찜한 콘텐츠</Link>
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
                            <form>
                                <input
                                    className={show ? 'showInput' : 'hideInput'}
                                    id="searchInput"
                                    type="text"
                                    value={value}
                                    onChange={handleChangeValue}
                                />
                            </form>
                        )}
                    </SearchDiv>

                    <ProfileDiv>
                        <article id="select">
                            <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                                <div id="selectButton">
                                    <img id="profileImg" src={Doy} alt="profile" />
                                    <button>
                                        <BiCaretDown />
                                    </button>
                                </div>
                                {unfold === 'true' && (
                                    <ul id="selectBox">
                                        <li id="option">
                                            <img src={Djyun} alt="djyun profile" />
                                            <Link to="/">djyun</Link>
                                        </li>
                                        <li id="option">
                                            <img src={Rock} alt="rock profile" />
                                            <Link to="/">돌멩이</Link>
                                        </li>
                                        <li id="option">
                                            <img src={Dieno} alt="dieno profile" />
                                            <Link to="/">dieno</Link>
                                        </li>
                                        <li id="option">
                                            <img src={Danbi} alt="ggongjukim profile" />
                                            <Link to="/">ggongjukim</Link>
                                        </li>

                                        <hr />
                                        <li id="option">
                                            <HiOutlinePencilSquare />
                                            <Link to="/">프로필 관리</Link>
                                        </li>
                                        <li id="option">
                                            <MdPublishedWithChanges />
                                            <Link to="/moveProfile">프로필 이전</Link>
                                        </li>
                                        <li id="option">
                                            <IoPersonOutline />
                                            <Link to="/">계정</Link>
                                        </li>
                                        <li id="option">
                                            <BsQuestionCircle />
                                            <a href="https://help.netflix.com/ko/">고객센터</a>
                                        </li>
                                        <hr />
                                        <li id="logout">
                                            <Link to="/login">넷플릭스에서 로그아웃</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </article>
                    </ProfileDiv>
                </RightSide>
            </Nav>
        </>
    );
};

export default Header;
