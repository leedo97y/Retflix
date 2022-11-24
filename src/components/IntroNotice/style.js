//intro notice
import styled from "@emotion/styled";

export const NoticeDiv = styled.div`
    z-index:1;
    position: relative;

    height : 80vh;
    display: flex;
    justify-content : center;
    align-items :center;

    & .noticeContainer{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgb(0,0,0,0.8),rgb(0,0,0,0.6));
        display: flex;
        flex-direction : column;
        justify-content : center;
        align-items :center;
        text-align: center;
    }
    & .noticeContainer div{ //글자들
        margin: 10px;
    }
    
    & .noticeContainer div:nth-child(1){
        font-size: 50px;
    }
    & .noticeContainer div:nth-child(2){
        font-size: 25px;
    }
    & .noticeContainer div:nth-child(3){
        font-size: 20px;
    }
    & .noticeContainer form{
        height :60px;
        width : 60%;
        max-width : 700px;
        display:flex;
        flex-direction: row;
        padding: 10px;
    }
    & input{
        flex :0.7;
        outline: none;
        border:none;
        border-radius:2px 0 0 2px;
        font-size : 1.5em;
        padding-left: 10px; 

    }
    & button{
        flex:0.3;
        cursor:pointer;
        background-color: red;
        outline: none;
        border:none;
        border-radius:0px 2px 2px 0px;

        font-size : 2em;
        color: white;
    }
`;