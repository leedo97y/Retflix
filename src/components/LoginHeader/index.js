import React from "react";
import Logo from "assets/images/Logo.png";
import { HeaderStyle } from './style'

const LoginHeader = () => {
    return (
        <HeaderStyle>
            <div className="item logo"><img src={Logo} alt="logo" /></div>
        </HeaderStyle>
    )
}

export default LoginHeader;