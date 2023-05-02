import React, { useEffect, useRef, useState } from 'react'
import { Nav } from '../common/Nav'
import "../config.json"
import { AiOutlineArrowDown } from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { Chart } from '../common/chart'

export const Data = () => {
    const selected = JSON.parse(localStorage.getItem("data"))
    const[currdata, setcurrdata] = useState([])
    // console.log(selected.name, selected.image)
    const ref = useRef(null);

    const handleClick = () => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
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
    // const grpahdata = ;
    // console.log(grpahdata)
    
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
        </div>
        <div className='result'>
            <h1>{selected.name} Tweet Analysis</h1>
          <div className='pro'>
            <div class="progress" role="progressbar" aria-label="Success example 40px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "40px"}}>
                <div class="progress-bar bg-success" style={{width:positive}}>POSITIVE: {positive}</div>
            </div>
            <div class="progress" role="progressbar" aria-label="Warning example 50px high" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: "40px"}}>
                <div class="progress-bar bg-warning text-dark" style={{width:neutral}}>Neutral: {neutral}</div>
            </div>
            <div ref = {ref} class="progress" role="progressbar" aria-label="Warning example 50px high" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: "40px"}}>
                <div class="progress-bar bg-danger" style={{width:negative}}>Negative: {negative}</div>
            </div>
            <br/>
          </div>
              <h1>{selected.name} Tweet Frequency</h1>
              <Chart jsonData={JSON.stringify(currdata["count of tweets"])}/>
        </div>
    </div>
  )
}
