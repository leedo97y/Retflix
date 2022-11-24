//Intro Content
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

    const margintop = String(props.margintop);

    return(
        <ContentVideo className="item" >
            {/* 영상 껍데기 이미지 */}
            <div className="image" style={{ backgroundImage: `url(${props.src})`}} ></div>
            {/* 비디오 */}
            <div className="video">
                <video style={{marginTop: margintop}} height={props.height}  autoPlay muted loop>
                    <source src={props.videosrc}>
                    </source>
                </video>
            </div>

        </ContentVideo>
    )
}

// const IntroContent = ()=>{
//     return (
//         <ContentContainer></ContentContainer>
//     )
// }
export  {IntroContentText,IntroContentVideo}