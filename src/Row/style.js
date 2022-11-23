import styled from '@emotion/styled';

export const Container = styled.section`
    margin-left: 20px;

    .row__posters {
        display: flex;
        overflow-y: hidden; /* 화면을 넘어갈 경우 세로 스크롤 할지 말지 */
        overflow-x: scroll; /* 화면을 넘어갈 경우 가로 스크롤 할지 말지 */
        padding: 20px;
    }

    .row__posters::-webkit-scrollbar {
        display: none; /* 스크롤 노출 유무 (작동엔 영향 없음) */
    }

    .row__poster {
        object-fit: contain;
        width: 100%;
        height: 190px;
        border-radius: 5px;
        max-width: 100%;
    }

    .content {
        width: 240px;
        margin-left: 10px;
    }

    .content:hover {
        cursor: pointer;
        .icons {
            transform: scale(1.3);
            display: flex;
            position: absolute;
        }
        .row__poster {
            transform: scale(1.3);
            position: relative;
        }
    }

    .icons {
        width: 240px;
        height: 100px;
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 0 0 5px 5px;
        display: none;
    }
    .icons .left svg:first-child {
        color: #fff;
    }

    .icons svg {
        font-size: 25px;
        padding: 3px;
        color: gray;
    }
`;
