import React from 'react'
import Pixel from './Pixel'



const App = () => {
  
  
  // console.log(clickHandler)
  const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  return (
    
    <>
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
    <Pixel />
   
    </>
  )
}

export default App
