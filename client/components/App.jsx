import React, { useState, useEffect } from 'react'
import Poixel from './WhateverYouLike.jsx'

const App = () => {
  
  return (
    <>
    {Array(200).fill(0).map(() => <Poixel/>)}
    </>
  )
}

export default App