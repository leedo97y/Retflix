import React from 'react';
import { Nav, LeftSide, RightSide, ImageDiv, ProfileDiv } from './style';
import Logo from 'assets/images/Logo.png';
import Search from 'assets/images/search.png';
import Profile from 'assets/images/bubbleProfile.jpg';

const Header = () => {
    return (
        <>
            <Nav>
                <ImageDiv>
                    <img id="logo" src={Logo} alt="NETFLIX" />
                </ImageDiv>
                <LeftSide>
                    <span>
                        <a href="/main">홈</a>
                    </span>
                    <span>
                        <a href="/series">시리즈</a>
                    </span>
                    <span>
                        <a href="/movie">영화</a>
                    </span>
                    <span>
                        <a href="/newContents">NEW! 요즘 대세 콘텐츠</a>
                    </span>
                    <span>
                        <a href="/like">내가 찜한 콘텐츠</a>
                    </span>
                </LeftSide>
                <RightSide>
                    <img id="searchImg" src={Search} alt="search" />
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
