import React, { useState } from 'react'

 const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  

  
  
  const Pixel = (props) => { 
    const [currentColour, setNewColour] = useState(randomHexColor())
    function timer() {
      setInterval(() => {
        console.log('cheese')
      setNewColour(randomHexColor())
      
      }, 500);
    }
  return(
  <>
  <div onClick = {() => timer()} 
    onMouseEnter = {() => setNewColour('transparent')}
    onDoubleClick ={() => timer()}
    style={{
    fontFamily: 'Times New Roman',
    height: 50,
    width: 50,
    backgroundColor: currentColour
  }}></div>
  </>
  )
}



export default Pixel