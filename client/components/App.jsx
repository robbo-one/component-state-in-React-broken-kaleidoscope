import React from 'react'
import Pixel from './Pixel'


const App = () => {
  return Array(750).fill(0).map((arr, i) => <Pixel key={i} />
  )
}

export default App
