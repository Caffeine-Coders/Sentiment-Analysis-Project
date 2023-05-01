import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Player } from '../Home/player';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Player/>}/>
            <Route path="/home" element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}
