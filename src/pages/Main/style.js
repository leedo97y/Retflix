import styled from '@emotion/styled';

export const MainContainer = styled.section`
    max-width: 100%;
    display: grid;
    grid-templete-row: 1fr 1fr 1fr;

    & article {
        max-width: 100%;

        & img {
            max-width: 100%;
        }
    }
`;
