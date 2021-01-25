import React, { useState } from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16).padStart(6, 0)}`

const Pixel = () => { 
  const hoverHandler = evt => {
    setStyle({
      height: "50px",
      width: "50px",
      backgroundColor: randomHexColor()
    })
  }

  const contextMenu = (evt) => {
    evt.preventDefault() 
    setStyle({
      height: "50px",
      width: "50px",   
      backgroundColor: 'black' 
    })
  } 

  const [style, setStyle] = useState({
    height: "50px",
    width: "50px",
    backgroundColor: randomHexColor()
  })

  return(<div style={style} 
  onMouseEnter={() => hoverHandler()}
  // onMouseLeave={() => hoverHandler()}
  onContextMenu={(evt) => contextMenu(evt)}>
  </div>)
}



export default Pixel