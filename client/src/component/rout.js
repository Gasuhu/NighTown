import React from 'react'
import Overview from './overview'
import Game from './game'
import {Routes ,Route } from 'react-router-dom'
const Rout = () =>
{
    return (
        <Routes>    
            <Route path="/" element={<Overview/>}/>
            <Route path="/game" element={<Game/>}/>
        </Routes>
    )
}
export default Rout