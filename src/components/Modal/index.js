import React, { useState } from 'react';
import { ModalWrapper } from './style';
import { IoMdAddCircleOutline, IoMdThumbsUp } from 'react-icons/io';
import { IoCloseCircleOutline, IoCaretForwardSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const base_url = 'https://image.tmdb.org/t/p/original/';

const Modal = props => {
    const { closeModal, movieTitle, img, releaseDate, overview,color } = props;

    return (
        <ModalWrapper>
            <div>
                <img src={`${base_url}${img}`} />
                <button className="closeBtn" onClick={closeModal}>
                    <IoCloseCircleOutline />
                </button>
                <span className="buttons">
                    <Link to="/video">
                        <button className="playBtn">
                            <IoCaretForwardSharp />
                            재생
                        </button>
                    </Link>
                    <IoMdAddCircleOutline />
                    
                    <IoMdThumbsUp color={color}/>
                </span>
                <span className="movieTitle">{movieTitle}</span>
                <span className="movieInfo">
                    <span>{releaseDate}</span>
                    <span>{overview}</span>
                </span>
            </div>
        </ModalWrapper>
    );
};
export default Modal;
