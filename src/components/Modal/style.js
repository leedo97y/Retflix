import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
    width: 95vw;
    display: flex;
    background-color: #000;
    justify-content: center;
    border-radius: 10px;
    div {
        position: fixed;
        top: 30px;
        width: 860px;
        height: 700px;
        background-color: #000;
        display: flex;
        flex-direction: column;
        color: #fff;
        margin: 0 auto;
    }
    img {
        width: 100%;
    }

    .closeBtn {
        cursor: pointer;
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 40px;
        background-color: transparent;
        border: none;
        color: #fff;
    }

    .movieTitle {
        position: absolute;
        font-size: 35px;
        font-weight: 800;
        top: 300px;
        left: 20px;
    }

    .buttons {
        cursor: pointer;
        position: absolute;
        font-size: 30px;
        top: 400px;
        left: 20px;
        display: flex;
        align-items: center;
    }
    .buttons svg {
        margin-right: 15px;
        color: #fff;
    }
    .playBtn {
        cursor: pointer;
        width: 100x;
        border-radius: 10px;
        border: none;
        background-color: #fff;
        padding: 5px;
        display: flex;
        align-items: center;
        margin-right: 15px;
    }

    .playBtn svg {
        font-size: 30px;
        color: #000;
    }

    .movieInfo {
        display: flex;
        flex-direction: column;
        box-shadow: 4px -49px 48px 21px #000;
        margin: 25px;
    }

    .movieInfo span:first-child {
        font-weight: 900;
        margin-bottom: 20px;
    }
`;
