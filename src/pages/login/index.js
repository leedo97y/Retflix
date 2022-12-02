import React from "react";
import { LoginContainer } from "./style";
import LoginHeader from 'components/LoginHeader';
import LoginContent from 'components/LoginContent';
import Footer from "components/Footer";

const Login = () => {
    return (
        <LoginContainer>
            <div className="BGcover">
                <LoginHeader />
                <LoginContent />
                <Footer />
            </div>
        </LoginContainer>
    )
}

export default Login;