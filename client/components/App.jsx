import React, { useState } from 'react'
import Poixel from './WhateverYouLike.jsx'

const App = () => {
  
  return (
    <>
    {Array(15000).fill(0).map(() => <Poixel/>)}
   
    </>
  )
}

export default App