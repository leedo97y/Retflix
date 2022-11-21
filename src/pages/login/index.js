import React from "react";
import { LoginContainer } from "./style";
import loginBG from 'assets/images/KR_login_bg.jpg';
import LoginHeader from 'components/LoginHeader';
import Footer from "components/Footer";

const Login = () => {

    return (
        <LoginContainer>
            <LoginHeader />
            <div>
                <article>
                    <img src={loginBG} alt="loginBG" />
                </article>
            </div>
            <Footer />
        </LoginContainer>
    )
}

export default Login;
