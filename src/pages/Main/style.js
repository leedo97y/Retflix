import styled from '@emotion/styled';


export const MainContainer = styled.section`
    max-width: 100%;

    & article{
        max-height: 1000px;
        width: 100%;

        & img{
            max-width: 100%;
        }

    }


`;

export const VideoWrap = styled.div`
    position: relative;
    max-height: 1000px;
    min-height: 400px;
    padding-top: 20%;

    & div{
        position: absolute;
        top: 0;
    }

`

export const MediaDetail = styled.section`
    position: absolute;
    z-index: 99;
    top: 16%;
    left: 40px;

    & dl{
        display: flex;
        flex-direction: column;
        gap: 26px;
        text-transform: uppercase;

        & dt{
            font-size: 4vw;
            color: #fff;
        }

        .keywords{
            font-size: 2.4vw;
        }

        & dd{
            overflow : hidden;
            text-overflow : ellipsis; 
            word-wrap : brek-word; 
            display : -webkit-box;
            -webkit-line-clamp : 3; 
            -webkit-box-orient: vertical; 
            font-size: 1.6vw;
            color: #fff;
            margin-left: 0;
            width: 400px;
        }

    }

    & button{
            font-size: 1.2rem;
            background: #fff;
            border: none;
            appearance: none;
            border-radius: 10px;
            padding: 1.2vw 3vw;
            color: #000;
            font-weight: 600;
            cursor: pointer;

            :hover{
                opacity: 0.9;
            }

            & svg{
                font-size: 24px;
                vertical-align: sub;
            }
    }

`