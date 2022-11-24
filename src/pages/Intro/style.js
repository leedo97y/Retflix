//Intro 대빵
import styled from "@emotion/styled";
export const IntroContainer = styled.div`
    /* background-color : black; */
    color :white;
`;
//여기서 하면 되는데
// Component/style 은 안됨
export const IntroContent = styled.div` 
    
    /* background-color: pink; */

    /* border: 3px solid yellow; */

    border-bottom: 10px solid #222;
    height: 400px;

    & .border{
        margin : 0 auto;    
        height:100%;
        max-width :1200px;
        min-width : 800px;
        display:grid;
        grid-template-columns: 1fr 1fr;
    }

`