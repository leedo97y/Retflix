import styled from "@emotion/styled";
export const ContentText = styled.div`
    padding:30px 20px;

    display:grid;
    grid-template-columns: 1fr;
    grid-templage-rows : 1fr 1fr;

    div{
        width:80%

        display:flex;
        align-item: center;
        justify-content: flex-start;

    }
    div.header{
        font-size: 50px;
    }
    div.content{
        font-size: 20px;
    }


`;

export const ContentVideo = styled.div`
    padding:10px;
    heigth:100%;
    div{
        height: 100%;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center bottom;
    
    }
`;

//안먹음
// export const ContentContainer = styled.div`
//     height:300px;

// `;

