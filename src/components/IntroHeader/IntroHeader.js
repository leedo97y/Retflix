import React from "react";
import Logo from "../../assets/images/Logo.png";
import {Headerdiv} from'./style'

const handleToLogin =()=>{
    console.log("로그인 페이지로 가게 할것");
    alert("로그인 페이지 라우터")
}

const IntroHeader = ()=>{
    return (
        <Headerdiv>
            <div className="item logo"><img src = {Logo}/></div>
            <div className="item button"><button onClick ={handleToLogin}>로그인</button></div>
        </Headerdiv>
    )
}
export default IntroHeader;