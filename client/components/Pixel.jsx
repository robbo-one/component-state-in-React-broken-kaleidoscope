import React, { useState } from "react"


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const Pixel = () => {
const [style, setStyle] = useState({
    height: '100px', 
    width: '100px', 
    backgroundColor: randomHexColor()
})

const clickHandler = evt => {
  setStyle({
      height: '100px', 
      width: '100px', 
      backgroundColor: randomHexColor()
  })
}
const turnGreen = evt => {
  setStyle({
    height: '100px', 
    width: '100px', 
    backgroundColor: 'green'
  })
}

const rightClick = evt => {
  setStyle({
    height: '100px', 
    width: '100px', 
    backgroundColor: 'black'
  })
  evt.preventDefault()
}

  return (
    <div style={style} onClick={clickHandler} onMouseEnter={turnGreen} onContextMenu={rightClick}>
    </div>
  )
}

export default Pixel