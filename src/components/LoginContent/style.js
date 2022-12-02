// LoginContent
import styled from "@emotion/styled";

export const ContentStyle = styled.div`
    padding: 15px;

    .LoginContent {
        max-width: 314px;
        min-height: 665px;
        margin: 0.5vh auto 8vh auto;
        background: rgba(0, 0, 0, 0.75);
        padding: 0px 68px 0px 68px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
    }

    .LoginMainForm {
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: #fff;
        font-size: 32px;
        margin: 60px 68px 0px 0px;
        font-weight: 500;
    }
    
    .LoginHelp {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: #737373;
        margin: 0;
        border: none;
        border-radius: 2px;
        outline: 0;
        width: 16px;
        height: 16px;
    }
    
    input[type="checkbox"]::after {
        content: '✔';
        padding-left: 3px;
        display: none;
    }

    input[type="checkbox"]:checked {
        /* background: #fff; */
    }

    input[type="checkbox"]:checked::after {
        display: block;
    }

    .rememberMeText {
        color: #b3b3b3;
        font-size: 13px;
        font-weight: 400;
        margin-left: 5px;
    }

    .LoginHelpLink {
        color: #b3b3b3;
        font-size: 13px;
        font-weight: 400;
        text-decoration: none;
    }

    .LoginHelpLink:hover {
        text-decoration: underline;
    }

    .LoginSubText {
        margin: 60px 0px auto 0px;
    }

    .SignUpNow {
        color: #737373;
        font-size: 16px;
    }

    .SignUpNow a {
        font-size: 16px;
        margin-left: 5px;
        color: #fff;
        text-decoration: none;
    }

    .SignUpNow a:hover {
        text-decoration: underline;
    }

    .RecaptchaMsg p {
        height: 35px;
    }

    .RecaptchaMsg p span {
        color: #8c8c8c;
        font-size: 13px;
    }

    .RecaptchaMsg button {
        background: none;
        border: none;
        color: #0071eb;
        font-size: 13px;
        cursor: pointer;
    }

    .RecaptchaMsg button:hover {
        background: none;
        border: none;
        color: #0071eb;
        font-size: 13px;
        text-decoration: underline;
    }

    .RecaptchaToU {
        color: #8c8c8c;
        font-size: 13px;
        text-align: left;
        /* margin-bottom: 40px; */
        line-height: 16px;
    }

    .RecaptchaToU a {
        color: #0071eb;
        text-decoration: none;
    }
`;

