import React from "react";
import {ContentText,ContentVideo} from'./style'

const IntroContentText = (props)=>{ //글자 //props?

    return(
        <ContentText className="item">        
            <div className="header">{props.header}</div>
            <div className="content">{props.content}</div>
        </ContentText>
    )
}
const IntroContentVideo = (props)=>{ //video
    return(
        <ContentVideo className="item">
            <div className="image" style={{ backgroundImage: `url(${props.src})`}}/>
        </ContentVideo>
    )
}

// const IntroContent = ()=>{
//     return (
//         <ContentContainer></ContentContainer>
//     )
// }
export  {IntroContentText,IntroContentVideo}