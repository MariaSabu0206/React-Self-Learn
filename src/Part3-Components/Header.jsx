import React from 'react'
import "./Header.css" //external style imported
const Header = () => {
    const headingStyle={color:"blue"};
  return (
    <div className='header'>
        <h1 style={{color:"red"}}>Component1</h1> 
        <h2 style={headingStyle}>Component2</h2>
        <h1 className='header'>Component3</h1>
        <p className='para'>This is a paragraph</p>
    </div>
   
  )
}

export default Header

// Components can be reused
// h1 eg for inline style
// h2 eg for styling through variables