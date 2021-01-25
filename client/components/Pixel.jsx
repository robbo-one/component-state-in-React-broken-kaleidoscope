import React, {useState, useEffect} from 'react'



const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
const Pixel = (props) => {

  const [style, setStyle] = useState({height:20, width: 20, backgroundColor: randomHexColor()})
  
  useEffect(() => {
    intervalHandler()
  })

  const clickHandler = evt => {
    setStyle({
      backgroundColor: randomHexColor(),
      height:20, 
      width: 20
    })
  }

  const intervalHandler = () => {
    setInterval(() => {
      clickHandler()
    },10)
  }

  const onMouseEnter = evt => {
    setStyle({
      backgroundColor: randomHexColor(),
      height:10, 
      width: 10
    })
  }

  const onDragEnter = evt => {
    setStyle({
      backgroundColor: 'yellow',
      height:20, 
      width: 20
    })
  }

  console.log(style)
  return (
  <div onClick={clickHandler} onMouseEnter={onMouseEnter} onDragEnter={onDragEnter} style={style}>
  </div>
  )
}

export default Pixel

