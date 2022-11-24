import React from "react";
import { LoginContainer } from "./style";
import LoginHeader from 'components/LoginHeader';
import LoginContent from 'components/LoginContent';
import Footer from "components/Footer";

const Login = () => {
    return (
        <LoginContainer>
            <LoginHeader />
            <LoginContent />
            <Footer />
        </LoginContainer>
    )
}

export default Login;