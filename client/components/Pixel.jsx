import React, { useState } from "react"

const Pixel = () => {
const [style] = useState({
    height: '100px', 
    width: '100px', 
    backgroundColor: "red"
})

  return (
    <div style={style}>
    </div>
  )
}

export default Pixel