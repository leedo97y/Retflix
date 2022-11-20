//introHeader
import styled from "@emotion/styled";
export const Headerdiv = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    // margin : 10px;
    padding:10px;
    .item{
        display:flex;
        align-item :center;

    }
    .item.logo{
        justify-content: flex-start;
    }
    .item.button{
        justify-content: flex-end;

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

