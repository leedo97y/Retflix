import styled from '@emotion/styled';

export const Container = styled.section`
    margin-left: 20px;
    color: #e5e5e5;
    margin-top: 20px;

    & strong {
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
            &:hover {
                .icons {
                    display: flex;
                    transform: scale(1.3);
                    position: absolute;
                }
                .rowLineItem {
                    transform: scale(1.3);
                    position: relative;
                }
            }

            .rowLineItem {
                object-fit: contain;
                max-width: 100%;
                min-width: 260px;
                border-radius: 5px;
            }

            .icons {
                width: 260px;
                height: 100px;
                background-color: #000;
                color: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                margin-top: 10px;
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
