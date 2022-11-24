import styled from '@emotion/styled';

export const FooterBody = styled.div`
    width: 100%;
    height: 400px;

    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    justify-content: center;
    align-items: center;

    font-size: 10px;
    color: #999999;
    background-color: #000;
`;

export const TopDiv = styled.div`
    margin-top: 60px;
`;

export const MiddleDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
`;

export const LeftDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 75px;

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        line-height: 25px;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #999999;
    }
`;

export const RightDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 75px;

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        line-height: 25px;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #999999;
    }
`;

export const BottomDiv = styled.div`
    margin-bottom: 20px;

    #detail {
        line-height: 17px;
    }
`;
