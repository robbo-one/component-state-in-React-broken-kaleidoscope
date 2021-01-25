import React, { useState } from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const Pixel = () => { 
  const [style, setStyle] = useState({
    height: "50px",
    width: "50px",
    backgroundColor: randomHexColor()
  })
  return(<div style={style}>
  </div>)
}



export default Pixel