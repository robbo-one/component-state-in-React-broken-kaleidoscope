import React from 'react'
import Pixel from './Pixel'

const pixels = []
for(let i=0; i < 500; i++) {
  pixels[i] = <Pixel />
  console.log(Pixel)
}

const App = () => {
  return (
    <div className ="container">
      {pixels}      
    </div>
  )
}

export default App
