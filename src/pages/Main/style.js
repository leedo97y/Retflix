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