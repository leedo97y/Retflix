import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
const base_url = 'https://image.tmdb.org/t/p/original/';

const Modal = props => {
    const { open, close, movieTitle, img } = props;
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <ModalWrapper>
            {open ? (
                <section>
                    <img src={`${base_url}${img}`} />
                    <button className="close" onClick={close}>
                        x
                    </button>

                    {movieTitle}
                </section>
            ) : null}
        </ModalWrapper>
    );
};
export default Modal;

const ModalWrapper = styled.div`
    // width: 100%;
    // height: 100vh;
    background-color: #000;
    section {
        position: absolute;
        top: 10px;
        //width: 800px;
        height: 1000px;
        background-color: #000;
        display: flex;
        flex-direction: column;
        color: #fff;
    }

    display: flex;
    img {
        width: 485px;
    }
`;
