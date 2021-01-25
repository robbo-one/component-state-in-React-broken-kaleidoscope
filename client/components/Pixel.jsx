
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
    const turnYellow = () => {
        setStyle
        ({
            height: '100px',
            width: '100px',
            backgroundColor: 'yellow'
        })
    }
    const turnGreen = (evt) => {
        setStyle
        ({
            height: '100px',
            width: '100px',
            backgroundColor: 'green'
        })
    }

    const turnBlack = (evt) => {
        evt.preventDefault()
        setStyle
        ({
            height: '100px',
            width: '100px',
            backgroundColor: 'black'
        })
    }

    const turnWhite = () => {
        setStyle
        ({
            height: '100px',
            width: '100px',
            backgroundColor: 'white'
        })
    }
    


    return (
        <div style={style} 
        onClick={clickHandler} 
        onDragEnter={turnYellow}
        onMouseEnter={turnGreen}  
        onContextMenu={turnBlack} 
        onDoubleClick={turnWhite} 
        
        // onMouseLeave={clickHandler} 
        >
        </div>
    )
}


export default Pixel