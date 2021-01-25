
import React, { useState } from 'react'



const Pixel = () => {
    const [style, setStyle] = useState({
        height: '100px',
        width: '100px',
        backgroundColor: 'deeppink'
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