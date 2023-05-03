import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import video from "../videos/ENTRY.mp4"
import { useNavigate } from 'react-router-dom';

export const Player = () => {
     const navigate = useNavigate();

      const handleVideoEnd = () => {
        navigate("/home")
      };

  return (
    <div className='entry' style = {{overflowY: 'hidden'}}>
      <ReactPlayer
          url="https://youtu.be/mLKjKfWDq2k"
          playing={true}
          width="100vw"
          height="100vh"
          muted
          onEnded = {handleVideoEnd}
        />   
    </div>
  )
}
