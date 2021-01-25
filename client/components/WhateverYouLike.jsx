import React, { useState } from 'react'

const Poixel = () => {

  const [style, setStyle] = useState({
    height: '100px',
    width: '100px',
    backgroundColor: 'DarkGoldenRod'
  })

  const clickHandler = evt => {
      setStyle({
        height: '100px',
        width: '100px',
        backgroundColor: randomHexColor()
      })
       
  }

  return (
    <div style={ style } onClick={ clickHandler }>
    </div>
  )
}

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Poixel