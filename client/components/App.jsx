import React from 'react'
import Pixel from './Pixel'

const Pixels = []
for(let i=0; i< 100000; i++) {
  Pixels[i] = <Pixel />
}

const App = () => {
  return (
    <div className ="container">
      <Pixels />
    </div>
  )
}

export default App
