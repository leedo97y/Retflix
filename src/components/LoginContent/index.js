import React from "react";
import loginBG from 'assets/images/KR_login_bg.jpg';
import { ContentStyle } from './style'

const LoginContent = () => {
    return (
        <ContentStyle>
            <article>
                <img src={loginBG} alt="loginBG" />
            </article>
        </ContentStyle>
    )
}

export default LoginContent;