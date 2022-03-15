import React from 'react'
import VideoPlayer from "react-video-js-player";

function Video() {
    const source = "../assets/addvertise.mp4";
    const poster="../assets/poster.png";
    return (
        <VideoPlayer
            controls={true}
            src={source}
            poster={poster}
            width="330"
            height="260"
        />
    )
}

export default Video
