// LoginContent
import styled from "@emotion/styled";
export const ContentStyle = styled.div`
    padding: 15px;

    .LoginContent {
        max-width: 314px;
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

    .LoginForm {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .InputID {
        background: #333333;
        color: #fff;
        border-color: none;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        box-sizing: border-box;
        border-width: 0;
        border-radius: 4px;
        font-size: 16px;
        line-height: 50px;
        width: 314px;
        margin: 28px 68px 19px 68px;
        padding: 0 20px;
    }

    .InputPW {
        background: #333333;
        color: #fff;
        border-color: none;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        box-sizing: border-box;
        border-width: 0;
        border-radius: 4px;
        font-size: 16px;
        line-height: 50px;
        width: 314px;
        margin: 19px 68px 0 68px;
        padding: 0 20px;
    }

    .InputID:focus,
    .InputPW:focus {
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 4px;
        caret-color: #fff;
    }

    .InputID::placeholder,
    .InputPW::placeholder {
        color: #8c8c8c;
        font-weight: 500;
    }

    .placeLabel {
        color: #8c8c8c;
        font-weight: 400;
        font-size: 16px;
    }

    .LoginBtn {
        background: #e50914;
        color: #fff;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.55) 0px 1px 0px 0px;
        padding: 10px auto;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        margin: 62px 68px;
        padding: 16px;
        height: 48px;
        width: 314px;
    }
    
    .LoginSubText {
        margin: 30px 0px auto 0px;
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
        margin-bottom: 40px;
        line-height: 16px;
    }
`;

