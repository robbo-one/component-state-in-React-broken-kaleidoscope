import React, { useState, useEffect } from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16).padStart(6, 0)}`

const Pixel = () => { 
  const hoverHandler = evt => {
    setStyle({
      height: "20px",
      width: "20px",
      backgroundColor: randomHexColor()
    })
  }

  const onDoubleClick = (evt) => {
    setStyle({
      height: "20px",
      width: "20px",
      backgroundColor: 'white'
    })
  }

  const onDragEnter = (evt) => {
    evt.preventDefault() 
    setStyle({
      height: "20px",
      width: "20px",   
      backgroundColor: 'yellow' 
    })
  } 

  const contextMenu = (evt) => {
    evt.preventDefault() 
    setStyle({
      height: "20px",
      width: "20px",   
      backgroundColor: 'black' 
    })
  } 

  const [style, setStyle] = useState({
    height: "20px",
    width: "20px",
    backgroundColor: randomHexColor()
  })

  const startInterval = (evt) => {
    setInterval(() => {
      setStyle({
        height: "20px",
        width: "20px",
        backgroundColor: randomHexColor()
      })
    }, 2000)
  }

  useEffect(() => {
    const randoNum = Math.floor(Math.random() * (1 + 75 - 2)) + 2 + 'px'
    const randoNum2 = Math.floor(Math.random() * (1 + 75 - 2)) + 2 + 'px'
    setInterval(() => {
      setStyle({
        height: randoNum,
        width: randoNum2,
        backgroundColor: randomHexColor()
      })
    }, 1500)
  })



  return(<div className='pixel' style={style} 
  onMouseEnter={() => hoverHandler()}
  // onMouseLeave={() => hoverHandler()}
  onContextMenu={(evt) => contextMenu(evt)}
  onDoubleClick={(evt) => onDoubleClick(evt)}
  onDragEnter={(evt) => onDragEnter(evt)}
  onClick={(evt) => startInterval(evt)}>

  </div>)
}



export default Pixel