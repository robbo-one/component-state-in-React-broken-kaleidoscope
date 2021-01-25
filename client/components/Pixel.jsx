import React from 'react'
import { useState } from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


const Pixel = () => {
    const [style, setStyle] = useState({ height: "50px", width: '50px', backgroundColor: randomHexColor() })

    const clickHandler = evt => {
        setStyle(
            { height: "50px", width: '50px', backgroundColor: randomHexColor() }
        )
      }

      const turnGreen = evt => {
        setStyle(
            { height: "50px", width: '50px', backgroundColor: 'green' }
        )
      }

      const turnBlack = evt => {
        evt.preventDefault()
        setStyle(
            { height: "50px", width: '50px', backgroundColor: 'black' }
        )
      }



    return (
        <div onContextMenu={turnBlack} onMouseEnter={() => turnGreen()} onClick={() => clickHandler()}style={style}></div>
    )
}

export default Pixel
