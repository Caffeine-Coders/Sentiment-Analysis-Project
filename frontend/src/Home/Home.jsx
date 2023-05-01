import React, { useRef, useState } from 'react'
import { Nav } from '../common/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactPlayer from 'react-player';
import video from "../videos/bgvideoforsentiment.mp4"
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Bootstrapcard } from '../common/bootstrapcard';

export const Home = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

//  "image": "",
// "name": "",
// "desc": ""

  const[persons, setpersons] = useState([
    {
      "image": "https://cdn.wisden.com/wp-content/uploads/2023/04/MS-Dhoni-980x530.png",
      "name": "MS Dhoni",
      "desc": "Former ICT captain, Csk captain"
    }
    ,
    {
      "image": "https://openthemagazine.com/wp-content/uploads/2022/10/ViratKohli.jpg",
      "name": "Virat Kohli",
      "desc": "Indian Cricketers"
    },
    {
      "image": "https://images.unsplash.com/photo-1620083295363-2aef3e510a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "name": "Trump",
      "desc": "Former president of USA"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Amber Herd",
      "desc": "Actress"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Jhonny Depp",
      "desc": "Actor"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Bill Gates",
      "desc": "Founder of Microsoft"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Ed Lee",
      "desc": "Mayor of SF"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Elon Musk",
      "desc": "Current CEO of Twitter"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Hilary Clinton vs Trump",
      "desc": "Polictical Rivals"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Meghan Markel",
      "desc": "Former Royal of UK"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Oprah Winfrey",
      "desc": "TV host"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Jhonny Depp vs Amber Herd",
      "desc": "The Trail Tweets"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Jimmy Fallon",
      "desc": "TV Host"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Kejrival",
      "desc": "Indian Politician"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Narendra Modi",
      "desc": "Indian Politician"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Narendra Modi",
      "desc": "Opinion about the Indian Politician"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Barac Obama",
      "desc": "American Politician"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amber_Heard_by_Gage_Skidmore.jpg",
      "name": "Rahul Gandhi",
      "desc": "Indian Politician"
    },
  ]) 


  return (
    <div className='Home'>
        <Nav/>
        <div className='video'>
         <ReactPlayer
          url={video}
          playing={true}
          width="100%"
          height="100%"
          // volume={0.8}
          muted = {true}
          loop ={true}
        />
         <button className="play-button" onClick={handleClick}>Scroll-down <AiOutlineArrowDown/></button>
        </div>

        <div ref = {ref}>
            akhgkjhgkjsadf
            asdgkjahdfgkjafhgk
            asdgkjadfhgkjafhgk
            asgkjahgkjfahgkj
            asfsgkjhafjkghafkjlfghkjaf
        </div>
    </div>
  )
}
