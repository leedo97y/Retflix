import styled from '@emotion/styled';
import Box from 'assets/images/BoxAsset.png';

export const FirstDiv = styled.div`
    width: 100%;
    height: 100px;
    background-color: #141414;
`;

export const Middle = styled.div`
    width: 100%;
    height: 550px;
    background-image: radial-gradient(
        circle at 0 0,
        #000 0,
        #250c24 33%,
        #2a0d24 61%,
        #721d26 100%
    );
`;

export const SecondDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-content: center;
    align-items: center;

    width: 80%;
    height: 550px;
    margin: 0px auto;
`;

export const Left = styled.div`
    display: grid;
    grid-template-rows: 60px 260px 45px;
    margin-left: 80px;
    margin-right: 30px;
    width: 500px;
    height: 400px;
    color: #fff;

    h1 {
        margin-top: 0;
        font-size: 40px;
        font-weight: 500;
    }
`;

export const Right = styled.div`
    width: 400px;
    height: 400px;
    background: 50% / contain no-repeat url(${Box});
`;

export const TextDiv = styled.ul`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    list-style: none;
    padding: 0;

    li {
        display: flex;
        flex-direction: row;

        div {
            display: grid;
            grid-template-columns: 40px 1fr;
        }

        svg {
            position: relative;
            color: red;
            width: 30px;
            height: 30px;
        }

        p {
            font-size: 18px;
            margin: 0 0 20px 0;
        }

        a {
            color: #fff;
        }
    }
    li:last-child {
        height: 70px;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
        font-size: 15px;
        width: 250px;
        height: 45px;

        cursor: pointer;
    }

    button:first-child {
        margin-right: 20px;
    }

    button:last-child {
        background-color: transparent;
        border: 1px solid red;
    }
`;
