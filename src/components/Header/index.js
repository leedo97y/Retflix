import React from 'react';
import { Nav, LeftSide, RightSide, RightDiv, ImageDiv } from './style';
import Logo from '../../assets/images/Logo.png';
import Profile from '../../assets/images/bubbleProfile.jpg';

const Header = () => {
    return (
        <>
            <Nav>
                <ImageDiv>
                    <img id="logo" src={Logo} alt="NETFLIX" />
                </ImageDiv>
                <LeftSide>
                    <span>
                        <a href="1.html">홈</a>
                    </span>
                    <span>
                        <a href="1.html">시리즈</a>
                    </span>
                    <span>
                        <a href="1.html">영화</a>
                    </span>
                    <span>
                        <a href="1.html">NEW! 요즘 대세 콘텐츠</a>
                    </span>
                    <span>
                        <a href="1.html">내가 찜한 콘텐츠</a>
                    </span>
                </LeftSide>
                <RightSide>
                    <RightDiv>
                        <img id="searchImg" src="#" alt="search" />
                        <div>
                            <img id="profileImg" src={Profile} alt="profile" />
                            <select>
                                <option></option>
                                <option>계정관리</option>
                            </select>
                        </div>
                    </RightDiv>
                </RightSide>
            </Nav>
        </>
    );
};

export default Header;
