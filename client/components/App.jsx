import React from 'react'
import Pixel from './Pixel'

const App = () => {

  


  return Array(1000).fill(0).map(() => { return <Pixel/>})
}

export default App
