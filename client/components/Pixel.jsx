
import React, { useState } from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const Pixel = () => {
    const [style, setStyle] = useState({
        height: '100px',
        width: '100px',
        backgroundColor: randomHexColor()

    })

    const clickHandler = () => {
        setStyle
            ({
                height: '100px',
                width: '100px',
                backgroundColor: randomHexColor()
            })
    }


    return (
        <div style={style} onClick={clickHandler}>
        </div>
    )
}




export default Pixel