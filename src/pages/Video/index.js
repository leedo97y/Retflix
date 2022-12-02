import React from 'react';
import Movie from '../../video/1899.mp4';
import { VideoWrapper } from './style';
const Video = () => {
    return (
        <VideoWrapper>
            <video className="bg-video__content" autoPlay controls>
                <source src={Movie} type="video/mp4" />
            </video>
        </VideoWrapper>
    );
};

export default Video;
