import React, { useEffect, useRef, useState, lazy, Suspense }from 'react'
import { Nav } from '../common/Nav'
import "../config.json"
import { AiOutlineArrowDown } from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { Chart } from '../common/chart'
import { Bootstrapprogress } from '../common/bootstrapprogress'


export const Data = () => {
    const selected = JSON.parse(localStorage.getItem("data"))
    const[currdata, setcurrdata] = useState([])
    const divRef = useRef(null);

    const handleClick = () => {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    


useEffect(() => 
{
    fetch('https://raw.githubusercontent.com/Caffeine-Coders/Sentiment-Analysis-Project/main/frontend/src/config.json')
    .then(response => response.json())
    .then(data => {
        var name = selected.name+""
        console.log(name)
        const Data = data[name];
        setcurrdata(Data)
        // console.log(Data)
    })
    .catch(error => console.error(error));
}, [])

    const positive = currdata.positive + "%";
    const negative = currdata.negative+ "%";
    const neutral = currdata.neutral+ "%";

  return (
    <div>
    <Nav/>
        <div className='analysisperson'>
            {/* <img src={selected.image} width="100%" height= "100%"/> */}
            <ReactPlayer
            url={selected.video}
            controls= {false}
            playing={true}
            width="100%"
            height="100%"
            volume={0.4}
            // muted = {true}
            loop ={true}
            />
            <button className="play-button" onClick={handleClick}>Analysis <AiOutlineArrowDown/></button>

            <div ref = {divRef} className='result'>
              
              <h1>{selected.name} Tweet Analysis</h1>
                  <Bootstrapprogress positive={positive} negative={negative} neutral ={neutral}/>
              
              <h1>{selected.name} Tweet Data Analysis</h1>
                
                <div className='carousel'>
                    <Chart jsonData={JSON.stringify(currdata["count of tweets"])}/>
                </div>

              <h1>{selected.name} Tweet Word Cloud</h1>
                  <img className = "img" src= {selected.word} />
       </div> 
      </div>
      </div>
  )
}
