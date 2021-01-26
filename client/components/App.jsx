import React from 'react'

import Pixel from './Pixel.jsx'


const App = () => {
  // return (
  //   <>
  //   {/* <div>React development has begun!</div> */}
 
  // let arr = Array.from({length: 50}, () => <Pixel />)

  // let arr = new Array(50).fill(0).map(() => <Pixel />)
  let arr = new Array(750).fill(<Pixel />)

  // let arr = []
  // let i;
  // for (i = 0; i < 1000; i++) {
  //   arr.push( <Pixel />)
  // }

  return arr

  // return [
  //   <Pixel />,
  //   <Pixel />,
  //   <Pixel />
  // ]
    
  //   </>
  // )
}



export default App
