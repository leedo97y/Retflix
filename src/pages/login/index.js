import React from "react";
import { LoginContainer } from "./style";
import LoginHeader from 'components/LoginHeader';
import LoginContent from 'components/LoginContent';
import Footer from "components/Footer";
import loginBG from 'assets/images/KR_login_bg.jpg';

const Login = () => {
    return (
        <LoginContainer>
            <LoginHeader />
            <img src={loginBG} alt="loginBG" className="BG"></img>
            <LoginContent />
            <Footer />
        </LoginContainer>
    )
}

export default Login;