import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Data } from '../Home/data';
import { Player } from '../Home/player';
import { Testapi } from '../Home/Testapi';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Player/>}/>
            <Route path="/home" element = {<Home/>}/>
            <Route path="/analysis" element = {<Data/>}/>
            <Route path="/Testapi" element = {<Testapi/>}/>
        </Routes>
    </BrowserRouter>
  )
}
