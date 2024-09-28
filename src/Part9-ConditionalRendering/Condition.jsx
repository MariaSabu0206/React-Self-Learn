import React from 'react'
import Header1 from '../Part5-Bootstrap/Header'


const Condition = () => {
//   let number=0
//   const Checknumber=({number})=>{
//     if (number>0) {
//         return <h1>Positive Number</h1>
//     } else if(number<0) {
//         return <h1>Negative Number</h1>
//     }
//     else{
//         return <h1> Number is Zero</h1>
//     }
//   }

let number=0
let isloggedin=true;
  
  return (
    <div>
        {/* <Checknumber number={0}/>  */}

       {number>0?<h1>Positive</h1>:number<0?<h1>Negative</h1>:<h1>Zero</h1>}
       {isloggedin?<h1>Welcome</h1>:<h1>Please Login</h1>}
    </div>
  )
}

export default Condition