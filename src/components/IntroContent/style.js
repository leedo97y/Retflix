import styled from "@emotion/styled";

export const ContentText = styled.div`
    padding:30px 20px;

    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows : 0.5fr 0.5fr;


    div{
        /* border: 3px solid red; */
        /* display : flex;
        justify-content: flex-start;
        align-content: flex-start; */
    }
    div.header{
        padding : 20px;
        font-size: 50px;
    }
    div.content{
        padding-left:20px;
        font-size: 20px;
    }


`;

export const ContentVideo = styled.div`
    height:100%;
    /* border: 3px solid red; */

    div.image{
        /* border: 3px solid red; */

        position:relative;
        z-index:2;
        height: 100%;
        background-size: auto 80%;
        background-repeat: no-repeat;
        background-position: center;
    
    }
    div.video{
        height:100%;
        /* border: 3px solid yellow; */
        position:relative;
        z-index: 1;
        top:-400px;

        display:flex;
        align-content: center;
        justify-content: center;


    }
    div.video video{
        /* border: 3px solid green; */

        height : ${props=>props.height};
        /* margin-top: 100px; */
    }
`;

//안먹음
// export const ContentContainer = styled.div`
//     height:300px;

// `;

