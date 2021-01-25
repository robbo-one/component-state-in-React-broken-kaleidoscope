import React, {useState} from 'react'

const Pixel = () => {

  
  const [style] = useState({height:100, width: 100, backgroundColor: 'cornflowerblue'})

  return (
  <div style={style}>
  </div>
  )
}

export default Pixel