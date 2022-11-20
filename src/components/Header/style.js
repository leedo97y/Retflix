import styled from '@emotion/styled';

export const ImageDiv = styled.div`
    #logo {
        margin-top: 10px;
        width: 130px;
        height: 38px;
        margin-left: 30px;
        margin-right: 30px;
        cursor: pointer;
    }
`;

export const LeftSide = styled.div`
    margin-left: 20px;
`;

export const RightSide = styled.div`
    display: grid;
    grid-template-columns: 90px 80px;
    align-items: center;
    margin-left: 50px;
    #searchImg {
        width: 18px;
        height: 18px;
        margin-left: 60px;
        cursor: pointer;
    }
    #profileImg {
        width: 30px;
        height: 30px;
        margin-right: 5px;
        cursor: pointer;
    }
    #select {
        width: 20px;
        color: #fff;
        background-color: transparent;
        border: none;
        margin-top: 5px;
        cursor: pointer;
    }
`;

export const ProfileDiv = styled.div`
    display: flex;
    margin-left: 20px;
`;

export const Nav = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1.35fr;
    align-items: center;
    height: 70px;
    background-color: #000;
    background: linear-gradient(180deg, #000, #fff);
    color: #fff;
    font-weight: 500;
    span {
        margin-left: 30px;
    }
    a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
`;
