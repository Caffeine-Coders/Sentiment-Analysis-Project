import React, { useRef } from 'react'
import { Nav } from '../common/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactPlayer from 'react-player';
import video from "../videos/bgvideoforsentiment.mp4"
import { AiOutlineArrowDown } from 'react-icons/ai'

export const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
        <Nav/>
        <div className='video'>
         <ReactPlayer
          url={video}
          playing={true}
          width="100%"
          height="100%"
          volume={0.8}
          muted = {true}
          loop ={true}
        />
         <button className="play-button" onClick={handleClick}>Scroll-down <AiOutlineArrowDown/></button>
        </div>

        <div ref = {ref}>
          cards
        </div>
    </div>
  )
}
