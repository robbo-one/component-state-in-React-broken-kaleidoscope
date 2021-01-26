import React, { useState, useEffect } from 'react'

const Poixel = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setStyle({
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      })
    }, 3)
    return () => clearInterval(interval)
  }, [])

  const [style, setStyle] = useState({
    height: '50px',
    width: '50px',
    backgroundColor: 'BlanchedAlmond'
  })

  const clickHandler = evt => {
      setStyle({
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      })
  }

  // const onMouse = evt => {
  //   setStyle({
  //     height: '3px',
  //     width: '3px',
  //     backgroundColor: 'green'
  //   })
  // }

  // const onContext = evt => {
  //   setStyle({
  //     height: '3px',
  //     width: '3px',
  //     backgroundColor: 'black'
  //   })
  //   evt.preventDefault()
  // }

  // const onWhite = evt => {
  //   setStyle({
  //     height: '3px',
  //     width: '3px',
  //     backgroundColor: 'white'
  //   })
  // }

  const setColour = (colour, evt) => {
    setStyle({
      height: '50px',
      width: '50px',
      backgroundColor: colour
    })
    if (evt) {
      evt.preventDefault()
    }
  }

  return (
    <div 
    style={ style } 
    onClick={ clickHandler }
    onMouseEnter={ () => setColour('DeepSkyBlue') }
    onContextMenu={ (evt) => setColour('black', evt) }
    onDoubleClick={ () => setColour ('white')}
    onDragEnter={ () => setColour('yellow') }
    >
    </div>
  )
}

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Poixel