import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Nav = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 1.2fr;
    align-items: center;
    height: 70px;
    background: linear-gradient(
        to top,
        rgba(20, 20, 20, 0) 10%,
        rgba(20, 20, 20, 0.25) 25%,
        rgba(20, 20, 20, 0.5) 50%,
        rgba(20, 20, 20, 0.75) 75%,
        rgba(20, 20, 20, 1) 100%
    );
    color: #fff;
    font-weight: 500;
    span {
        margin-left: 30px;
    }
    a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
`;

export const ImageDiv = styled.div`
    #logo {
        margin-top: 10px;
        width: 130px;
        height: 38px;
        margin-left: 30px;
        margin-right: 30px;
        cursor: pointer;
    }
`;

export const LeftSide = styled.div`
    margin-left: 20px;
`;

export const RightSide = styled.div`
    display: grid;
    grid-template-columns: 110px 90px;
    align-items: center;
    margin-left: 50px;
`;

const show = keyframes`
    from {
        width: 0px
    }
    to {
        width: 200px;
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 0px;

    #searchImg {
        width: 20px;
        height: 20px;
        margin-right: 12px;

        cursor: pointer;
    }

    #searchInput {
        box-sizing: border-box;
        width: 200px;
        height: 33px;
        margin-right: 10px;
        padding: 5px 7px;
        background-color: rgba(2, 2, 2, 0.3);
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.7);
        border-radius: 7px;
        color: #fff;
    }

    .showInput {
        animation: ${show} 1.5s ease;
    }
`;

export const ProfileDiv = styled.div`
    display: flex;
    margin-left: 20px;

    #profileImg {
        width: 30px;
        height: 30px;
        margin-right: 5px;
        cursor: pointer;
    }
    #select {
        width: 20px;
        color: #fff;
        background-color: transparent;
        border: none;
        margin-top: 5px;
        cursor: pointer;
    }

    #select:focus-visible {
        border: none;
        outline: none;
    }
`;
