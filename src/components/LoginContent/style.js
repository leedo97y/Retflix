// LoginContent
import styled from "@emotion/styled";
export const ContentStyle = styled.div`
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    padding: 15px;

    .LoginContent {
        max-width: 400px;
        margin: 2vh auto;
        padding: 30px;
        background: #000;
        border-radius: 4px;
        z-index: -1;
        
    }

    .LoginContent::after {
        max-width: 400px;
        margin: 2vh auto;
        padding: 30px;
        background: #000;
        border-radius: 4px;
        opacity: 60%;
    }

    h1 {
        color: #fff;
    }

    .LoginForm {
        display: flex;
        flex-direction: column;
    }

    .placeLabel {
        color: #8c8c80;
        font-weight: 400;
    }

    .LoginBtn {
        background: #e50914;
        color: #fff;
        padding: 10px auto;
    }
    
    .SignUpNow {
        color: #737373;
        font-size: 15px;
    }

    .SignUpNow a {
        font-size: 15px;
        margin-left: 5px;
        color: #fff;
        text-decoration: none;
    }

    .SignUpNow a:hover {
        text-decoration: underline;
    }

    .RecaptchaMsg p span {
        color: #848284;
        font-size: 10px;
    }

    .RecaptchaMsg button {
        background: none;
        border: none;
        color: #0171eb;
        font-size: 13px;
    }

    .RecaptchaMsg button:hover {
        background: none;
        border: none;
        color: #0171eb;
        font-size: 13px;
        text-decoration: underline;
    }
`;

