import styled from '@emotion/styled';

export const Container = styled.section`
    margin-left: 20px;

    .row__posters {
        display: flex;
        overflow-y: hidden; /* 화면을 넘어갈 경우 세로 스크롤 할지 말지 */
        overflow-x: scroll; /* 화면을 넘어갈 경우 가로 스크롤 할지 말지 */
        padding: 20px;
        // position: relative;
    }

    .row__posters::-webkit-scrollbar {
        display: none; /* 스크롤 노출 유무 (작동엔 영향 없음) */
    }

    .row__poster {
        object-fit: contain;
        width: 100%;
        //max-height: 100px;
        // margin-right: 10px;
        transition: transform 450ms;
        border-radius: 5px;
    }

    // .row__poster:hover {
    //     position: absolute;
    // }

    .content:hover {
        transform: scale(1.2);
        transition: all 0.1s linear;
        // -webkit-transform: scale(1.2);
        // -moz-transform: scale(1.2);
        // -ms-transform: scale(1.2);
        // -o-transform: scale(1.2);

        .icons {
            display: flex;
        }
        //position: relative;
    }

    .row__posterLarge {
        max-height: 260px;
    }

    // .content {
    //     max-height: 330x;
    // }

    // .row__posterLarge:hover {
    //     transform: scale(1.09);
    // }

    // .content:hover {
    //     transform: scale(1.2);
    //
    // }

    .content {
        width: 165px;
        // background-color: #000;
        margin-left: 10px;
    }

    .icons {
        // width: 25px;
        //margin-top: 0;
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-radius: 0 0 5px 5px;
        // margin-left: 5px;
        display: none;
    }

    // icons:hover {
    //     position: absloute;
    // }
`;
