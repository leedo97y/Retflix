import styled from "@emotion/styled";
import background from "assets/images/loginBG.jpg";

export const LoginContainer = styled.div`
    background-image: url(${(background)});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    & .BGcover {
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
`;