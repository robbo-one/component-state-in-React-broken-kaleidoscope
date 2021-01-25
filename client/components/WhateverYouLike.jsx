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

  const onMouse = evt => {
    setStyle({
      height: '100px',
      width: '100px',
      backgroundColor: 'green'
    })
  }

  const onContext = evt => {
    setStyle({
      height: '100px',
      width: '100px',
      backgroundColor: 'black'
    })
    evt.preventDefault()
  }

  const onWhite = evt => {
    setStyle({
      height: '100px',
      width: '100px',
      backgroundColor: 'white'
    })
  }

  const onDrag = evt => {
    setStyle({
      height: '100px',
      width: '100px',
      backgroundColor: 'yellow'
    })
  }

  return (
    <div 
    style={ style } 
    onClick={ clickHandler }
    onMouseEnter={ onMouse }
    onContextMenu={ onContext }
    onDoubleClick={ onWhite }
    onDragEnter={ onDrag }
    >
    </div>
  )
}

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Poixel