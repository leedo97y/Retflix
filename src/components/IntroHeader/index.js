//IntroHeader
import React from "react";
import Logo from "assets/images/Logo.png";
import {Headerdiv} from'./style'
import {Link} from "react-router-dom"


const IntroHeader = ()=>{
    return (
        <Headerdiv>
            <div className="item logo"><img src = {Logo} alt="넷플릭스 로고"/></div>
            <div className="item button"><Link to="/login"><button>로그인</button></Link></div>
        </Headerdiv>
    )
}
export default IntroHeader;