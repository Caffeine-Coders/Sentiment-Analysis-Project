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
      "image": "https://people.com/thmb/YzxLyCRGNae_hm8ojS2S0pb4PGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/johnny-depp-1-29c4657afb7a4704ba1750de16b7283f.jpg",
      "name": "Jhonny Depp",
      "desc": "Actor"
    },
    {
      "image": "https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d",
      "name": "Bill Gates",
      "desc": "Founder of Microsoft"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Mayor_Ed_Lee_Headshot_Closeup.jpg",
      "name": "Ed Lee",
      "desc": "Mayor of SF"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
      "name": "Elon Musk",
      "desc": "Current CEO of Twitter"
    },
    {
      "image": "https://s.abcnews.com/images/Politics/EPA_Clinton_Trump_Split_jrl_161024_16x9_1600.jpg",
      "name": "Hilary Clinton vs Trump",
      "desc": "Polictical Rivals"
    },
    {
      "image": "https://media.glamour.com/photos/6259bf450e99bcd975ad0a1e/master/w_2560%2Cc_limit/1391651723",
      "name": "Meghan Markel",
      "desc": "Former Royal of UK"
    },
    {
      "image": "https://hips.hearstapps.com/hmg-prod/images/oprah-winfrey-arrives-at-the-premiere-of-owns-david-makes-news-photo-1678107172.jpg",
      "name": "Oprah Winfrey",
      "desc": "TV host"
    },
    {
      "image": "https://s.yimg.com/ny/api/res/1.2/Tl6Wc4vo09U9wCog3BkLHQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/people_218/ceb39adca9cb11facd5b338cba8f9c25",
      "name": "Jhonny Depp vs Amber Herd",
      "desc": "The Trail Tweets"
    },
    {
      "image": "https://www.gannett-cdn.com/-mm-/13e91021ee7e2fe7c62a54fe4ec9f15d9f63fecc/c=0-0-2996-1693/local/-/media/2018/05/21/USATODAY/USATODAY/636625026301850918-NUP-180738-0242.JPG?width=2996&height=1693&fit=crop&format=pjpg&auto=webp",
      "name": "Jimmy Fallon",
      "desc": "TV Host"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Arvind_Kejriwal_smiling_%28cropped%29.jpg",
      "name": "Kejrival",
      "desc": "Indian Politician"
    },
    {
      "image": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/01/01/nm-1177027-1672590352.jpg",
      "name": "Narendra Modi",
      "desc": "Indian Politician"
    },
    {
      "image": "https://m.economictimes.com/thumb/msid-71255941,width-1200,height-900,resizemode-4,imgsize-955580/howdy-modi-triumphant-moment-for-indo-us-ties-usispf.jpg",
      "name": "Narendra Modi",
      "desc": "Opinion about the Indian Politician"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/640px-President_Barack_Obama.jpg",
      "name": "Barack Obama",
      "desc": "American Politician"
    },
    {
      "image": "https://localist-images.azureedge.net/photos/36023435672136/original/361b47ffab5364f3368fe18de8e67e93768dd7bf.jpg",
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
