import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
export const FQAstyle = styled.div`

    margin: 10px auto;
    width: 45%;
    .title{
        background-color: #303030;

        padding: 17px 30px;
        cursor: pointer;
        font-size: 25px;
        /* border-bottom: 1px solid #dddddd; */

        display : flex;
        flex-direction: row;
        justify-content: space-between;
  
    }
    .title .btn{
        font-size:30px;
        color: white;
        background-color: rgba(0,0,0,0);
        border : 0;
        outline: 0;
    }
    .content{
        background-color: #303030;
        overflow :hidden; // 있어야함
        font-size: 25px;
        margin : 2px 0;
        height:0px;
        animation : ${props => acoClose(props.height)} 0.2s linear;

    }
    .content.on{
        display: block;
        height:${props=>props.height}px;
        animation : ${props => acoOpen(props.height)} 0.2s linear;
    }
    .content div{
        
        padding: 17px 30px;
    }

`;
const acoOpen = (y) =>
  keyframes`
    0% {
        height:0px
    }
    100% {
        height:${y}px;
    }
`   
const acoClose = (y) =>
  keyframes`
    0% {
        height:${y}px;
    }
    100% {
        height:0px;
    }
`
export const FQAcontainer = styled.div`

    p{
        width :60%;
        margin: 30px auto;
        text-align: center;
        font-size : 50px;
    }

`;
