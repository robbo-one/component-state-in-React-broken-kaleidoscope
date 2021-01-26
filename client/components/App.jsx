import React from 'react'
import Pixel from './Pixel'

const pixels = []
for(let i=0; i< 10000; i++) {
  pixels[i] = <Pixel />
}

const App = () => {
  return (
    <div className ="container">
      {pixels}
    </div>
  )
}

export default App
