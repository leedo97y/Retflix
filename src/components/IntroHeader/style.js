//introHeader
import styled from "@emotion/styled";
export const Headerdiv = styled.div`
    z-index: 2;
    position: absolute;

    width : 100vw;

    display:grid;
    grid-template-columns: 1fr 1fr;
    .item{
        display:flex;
        align-content :center;
    }
    .item.logo{
        justify-content: flex-start;
        padding-top: 50px;
        padding-left:50px;   
    }



    .item.button{
        justify-content: flex-end;
        padding-top: 50px;
        padding-right:50px;   
    }
    .item.button button{
        width : 100px;
        height :50px;
        background-color:red;
        color:white;
        border : none;
        border-radius : 5px;
    }

`;

