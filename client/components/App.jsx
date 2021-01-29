import React from 'react'
import Pixel from './Pixel'

const theArray = () => {return Array(100).fill(0).map((arr, i) => <Pixel key={i}/>)}

const App = () => {
   return <div style={{height:500, width: 500, backgroundColor:'blue'}}>
    {theArray()}
  </div>
  
}

export default App
