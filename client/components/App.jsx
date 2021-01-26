import React from 'react'
import Pixel from './Pixel'
import Fruit from './Fruit'
const App = () => {

  return Array(1000).fill(0).map(() => { return <Pixel/>})


}

export default App
