import React, { useState } from 'react'

 const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


const Pixel = (props) => { 
  const [currentColour, setNewColour] = useState(randomHexColor())
  console.log('cheese')
  return(
  <>
  <div onClick = {() => setNewColour(randomHexColor)} 
    onMouseEnter = {() => setNewColour('red')}
    onDoubleClick ={() => setNewColor ('skylue')}
  
    style={{
    fontFamily: 'Times New Roman',
    height: 5,
    width: 5,
    backgroundColor: currentColour
  }}>
  Sbeve like cheese</div>
  </>
  )
}



export default Pixel