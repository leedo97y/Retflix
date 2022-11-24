import styled from '@emotion/styled';

export const Container = styled.section`
    margin-left: 20px;
    color: #e5e5e5;
    margin-top: 20px;

    & strong{
        font-size: 1.4rem;
    }
    
    .rowLines {
        display: flex;
        overflow-y: hidden; 
        overflow-x: scroll; 
        gap: 10px;
        padding: 20px 0;

        &::-webkit-scrollbar {
            display: none; 
        }

        .imgSizeLarge {
            max-height: 330px;
        }


        .content {

            &:hover{
                .icons{
                    display: flex;
                    position: absolute;
                }
            }
            

            .rowLineItem {
                object-fit: contain;
                max-width: 100%;
                min-width: 260px;
                transition: transform 450ms;
                border-radius: 5px;

                &:hover{
                    transform: scale(1.2);
                    transition: all 0.4s linear;
                    cursor: pointer;
                }
            }

            .icons {
                width: 240px;
                height: 100px;
                background-color: #000;
                color: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                box-sizing: border-box;
                border-radius: 0 0 5px 5px;
                display: none;

                & svg {
                    font-size: 25px;
                    padding: 3px;
                    color: gray;
                }
                
                & .left svg:first-of-type {
                    color: #fff;
                }
            }
        }



    }

   
    





`;
