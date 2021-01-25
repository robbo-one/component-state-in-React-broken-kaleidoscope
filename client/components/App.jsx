import React from 'react'
import Pixel from './Pixel'




const App = () => {

  // function makeArray() {
  //   Array(len).fill(0).map(() => { return <Pixel/>})
  // }
  
  const len = 1000
  return Array(len).fill(0).map(() => { return <Pixel/>})
  
}

export default App
