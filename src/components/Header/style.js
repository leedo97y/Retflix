import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Nav = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 28px;
    display: grid;
    grid-template-columns: 1fr 5fr 300px;
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

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`;

const endRotation = keyframes`
from {
                transform: rotate(180deg);
            }
            to {
                transform: rotate(0deg);
            }
`;

export const ProfileDiv = styled.div`
    display: flex;
    margin-left: 20px;

    #profileImg {
        width: 30px;
        height: 30px;

        cursor: pointer;
    }

    #select {
        position: relative;
    }

    #selectButton {
        background-color: transparent;
        border: none;
        cursor: pointer;

        button {
            width: 20px;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        svg {
            color: #fff;
            width: 20px;
            height: 25px;
            margin-left: 5px;
            animation: ${endRotation} 1s ease;
            animation-fill-mode: none;
        }

        svg:hover {
            animation: ${rotation} 1s ease;
            animation-fill-mode: both;
        }
    }

    #selectBox {
        position: absolute;
        right: 0;
        list-style: none;
        margin: 5px 0;
        padding: 20px;
        width: 200px;
        height: 410px;
        background-color: rgba(2, 2, 2, 0.85);

        hr {
            width: 200px;
            border: 0.7px solid rgba(116, 116, 116, 0.3);
        }

        li {
            display: flex;
            align-items: center;
            height: 40px;
            padding: 5px 8px;
            margin-bottom: 3px;
            box-sizing: border-box;
            cursor: pointer;

            img {
                width: 35px;
                border-radius: 5px;
            }

            svg {
                color: #b0b0b0;
                width: 23px;
                height: 23px;
            }

            a {
                color: #b0b0b0;
                margin-left: 10px;
            }
        }

        li:last-child {
            padding-left: 15px;
        }
    }
`;
