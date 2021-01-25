import React, {useState} from 'react'



const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
const Pixel = (props) => {
  const [style, setStyle] = useState({height:100, width: 100, backgroundColor: randomHexColor()})
  const clickHandler = evt => {
    setStyle({
      backgroundColor: randomHexColor(),
      height:100, 
      width: 100
    })
  }
  console.log(style)
  return (
  <div onClick={clickHandler} style={style}>
  </div>
  )
}

export default Pixel