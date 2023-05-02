import React, { useEffect, useState } from 'react'
import { Nav } from '../common/Nav'
import "../config.json"
export const Data = () => {
    const selected = JSON.parse(localStorage.getItem("data"))
    const[currdata, setcurrdata] = useState([])
    // console.log(selected.name, selected.image)

useEffect(() => 
{
    fetch('https://raw.githubusercontent.com/Caffeine-Coders/Sentiment-Analysis-Project/main/frontend/src/config.json')
    .then(response => response.json())
    .then(data => {
        var name = selected.name+""
        console.log(name)
        const Data = data[name];
        setcurrdata(Data)
        console.log(Data)
    })
    .catch(error => console.error(error));

}, [])

  return (
    <div>
    <Nav/>
        <div className='analysisperson'>
            <img src={selected.image} width="100%" height= "100%"/>
        </div>
    </div>
  )
}
