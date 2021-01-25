
import React, { useState } from 'react'

const Pixel = () => {
    // const styleObject=
    const [style, setStyle] = useState ({
        height: '100px',
        width: '100px',
        backgroundColor: 'deeppink'
    })

    setStyle({
        height: '100px',
        width: '100px',
        backgroundColor: 'blue'
    })
     

    return(
         <div style= {style}>
         </div>
         )
}




export default Pixel