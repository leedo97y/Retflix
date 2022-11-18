import styled from '@emotion/styled';

export const ImageDiv = styled.div`
    #logo {
        margin-top: 10px;
        width: 130px;
        height: 40px;
        margin-left: 40px;
    }
`;

export const LeftSide = styled.div`
    margin-left: 20px;
`;

export const RightSide = styled.div`
    float: right;

    #searchImg {
        width: 50px;
        height: 50px;
    }
    #profileImg {
        width: 50px;
        height: 50px;
    }
`;

export const RightDiv = styled.div`
    float: right;
`;

export const Nav = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1.5fr;
    align-items: center;
    height: 80px;
    background-color: #000;
    color: #fff;
    span {
        margin-left: 30px;
    }
    a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
`;
