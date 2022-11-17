import styled from "@emotion/styled";

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
        max-height: 100px;
        margin-right: 10px;
        transition: transform 450ms;
    }

    .row__poster:hover {
        transform: scale(1.08);

    }

    .row__posterLarge {
        max-height: 250px;
    }

    .row__posterLarge:hover {
        transform: scale(1.09);
    }
`


