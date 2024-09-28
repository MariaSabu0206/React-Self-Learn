import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const ReactEvents = () => {
    const clickHandle=()=>{
        console.log("You clicked Me");
        
    }
    const dbclickHandle=(name)=>{
        alert("Hello" + name);
        

    }
    const onchangeHandle=()=>{
        alert("you typed in the text field");
        
        
    }
    const onkeyHandle=()=>{
        alert("you pressed a key");
        
        
    }
    const mousehandle=()=>{
        alert("You mouse over me")
    }
  return (
    <div>
        <h1 className='bg-success text-white'>Learn React Events</h1>
        <Button onClick={clickHandle}>Click Me</Button>
        <h1 onDoubleClick={()=>{dbclickHandle("Maria")}}>Double Click</h1>
        <input onChange={onchangeHandle} type="text" />
        <input onKeyDown={onkeyHandle} type="text" />
        {/* <h1 onMouseOver={mousehandle} >MouseOverEvent</h1> */}
    </div>
  )
}

export default ReactEvents