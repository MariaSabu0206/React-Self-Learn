import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'

function CounterTask() {
    const [count, setcount] = useState(0)
    const Increment=()=> {  
        setcount(count+1)
    }
    const Decrement=()=> {  
        setcount(count-1)
    }
  return (
    <div>
        <h1>Count is {count}</h1>
        <Button onClick={Increment} className='bg-success' >count+</Button>
        <br />
        <br />
        <Button onClick={Decrement} className='bg-danger'>count-</Button>
    </div>
  )
}

export default CounterTask