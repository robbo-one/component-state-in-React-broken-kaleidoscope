
import React, { useState } from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const Pixel = () => {
    const [style, setStyle] = useState({
        height: '100px',
        width: '100px',
        backgroundColor: randomHexColor()

    })

    const changeBackground = () => {
        setStyle
            ({
                height: '100px',
                width: '100px',
                backgroundColor: 'blue'
            })
    }


    return (
        <div style={style} onClick={changeBackground}>
        </div>
    )
}




export default Pixel