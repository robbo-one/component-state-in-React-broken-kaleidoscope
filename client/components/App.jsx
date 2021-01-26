import React from 'react'
import Pixel from './Pixel'


const App = () => {
  return Array(10000).fill(0).map(() => <Pixel />)
}

export default App
