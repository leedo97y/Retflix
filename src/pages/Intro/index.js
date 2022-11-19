//introPage 넷플릭스 가장 첫화면
import React from "react";
import IntroHeader from "../../components/IntroHeader/IntroHeader";
import {IntroContainer} from "./style"
const Intro = () => {

    return (
        <IntroContainer>
            <IntroHeader/>
            <h1>Netflix Intro Page</h1>
            
        </IntroContainer>
    )
}

export default Intro;