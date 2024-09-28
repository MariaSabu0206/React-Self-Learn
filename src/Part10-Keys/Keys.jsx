import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const products=[
    {id:1 ,name:"Laptop", brand:"Dell",Qty:1},
    {id:2 ,name:"Laptop", brand:"HP",Qty:1},
    {id:3 ,name:"Laptop", brand:"Lenova",Qty:1}
]

const Keys = () => {
    const [item, setitem] = useState(products)

    const changeQty=(id)=>{
       const newItem= item.map((item)=>
            item.id===id?{...item, Qty: item.Qty+1}:item
        )
      setitem(newItem)
        
    }
  return (
    <div>
        {item.map((product)=>(
        <div className='bg-success text-white m-2' key={product.id}>
        <h1>{product.name}</h1>
        <h3>Brand : {product.brand}</h3>
        <h4>Quantity : {product.Qty}</h4>
        <Button onClick={()=>{changeQty(product.id)}}>+</Button>
        </div>
        ))}
        

    </div>
  )
}

export default Keys