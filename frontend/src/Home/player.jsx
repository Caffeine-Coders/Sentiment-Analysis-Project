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
    <div className='entry' style = {{overflowY: 'hidden', overflowX: 'hidden'}}>
      <ReactPlayer
          url= ""
          playing={true}
          width="100%"
          height="100%"
          muted
          onEnded = {handleVideoEnd}
          style = {{overflowY: 'hidden', overflowX: 'hidden'}}
        />   
    </div>
  )
}
