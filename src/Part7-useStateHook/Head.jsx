import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

const Head = () => {
    const [color, setcolor] = useState("Green")
    const changeColour=()=>{
        setcolor("Red")
    }
  return (
    <div>
        <h1 className='bg-success text-white'>useState Hook in React</h1>
        <h2>My Favourite Colour is {color}</h2>
        <Button onClick={changeColour}>Change Colour</Button>
    </div>
  )
}

export default Head