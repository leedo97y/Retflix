// LoginContent
import styled from "@emotion/styled";
export const ContentStyle = styled.div`
    padding: 15px;

    .BG {
        position: relative;
        /* height: 100vh; */
        background-size: cover;
        opacity: 50%;
        margin: -50px auto auto auto;
        z-index: 0;
    }

    /* .BGimg-cover {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);                                                              
        z-index: 1;
    } */

    .LoginContent {
        max-width: 400px;
        margin: 2vh auto;
        /* padding: 30px; */
        background: #000;
        border-radius: 4px;
        /* z-index: 2; */
        
    }

    /* .LoginContent::after {
        max-width: 400px;
        margin: 2vh auto;
        padding: 30px;
        background: #000;
        border-radius: 4px;
        opacity: 75%;
    } */

    .LoginMainForm {
        display: flex;
        flex-direction: column;
        /* align-items: left; */
    }

    h1 {
        color: #fff;
        font-size: 32px;
        margin: 60px 68px auto 40px;
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
        margin: 62px 68px;
        padding: 16px;
        height: 48px;
        width: 314px;
    }
    
    .LoginSubText {
        margin: auto 48px auto 48px;
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
        height: 118px;
        margin-bottom: 40px;
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
    }

    .RecaptchaMsg button:hover {
        background: none;
        border: none;
        color: #0071eb;
        font-size: 13px;
        text-decoration: underline;
    }
`;

