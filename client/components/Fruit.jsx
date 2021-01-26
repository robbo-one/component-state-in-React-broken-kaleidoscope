import React from 'react'
import { useState } from 'react'

const Fruit = () => {
    const [fruit, setFruit] = useState ('banana')
    function changeFruit () {
        setFruit("apple")
    }

        
    return (
        <div>
            <h1>{fruit}</h1> 
            <button onClick={() => changeFruit()
            }>Change Fruit</button>
        </div>
    )
}

export default Fruit
