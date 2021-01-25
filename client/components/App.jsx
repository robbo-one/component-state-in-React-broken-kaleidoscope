import React from 'react'
import Pixel from './Pixel'
import {randomHexColor} from './Pixel'




const App = () => {
  return (
    <>
    <div className='box' style={{backgroundColor: 'skyblue'}}>
    <h2>React development has begun!</h2> 
    
    </div>
    <Pixel/>
    <Pixel/>
    <Pixel/>
    <Pixel/>
    <Pixel/>
    <Pixel/>
    <Pixel/>
    </>
  )
}

export default App
