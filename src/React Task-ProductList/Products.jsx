import React, { useState } from 'react'
import { phonesData } from './ProductData'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Products = () => {
    const [items, setitems] = useState(phonesData)
    const decQty=(id)=>{
        const newItem=items.map((item)=>
            item.id === id && item.qty>1?{ ...item, qty:item.qty - 1 }:item
        )
        setitems(newItem)
    }
    const incQty=(id)=>{
        const newItem=items.map((item)=>
            item.id === id ?{ ...item, qty:item.qty + 1 }:item
        )
        setitems(newItem)
    }


    return (
        <div>
            <h1 className='bg-info text-white'>Products</h1>
            {
                items.map((items) => (
                  <div className='d-inline-flex' key={items.id}>
                    <Card className='shadow p-3 m-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
                        <Card.Img variant="top" 
                        style={{ height: '15rem' }}
                        className='p-2'
                        src={require(`./assets/${items.image}.jpeg`)} /> 
                
                        <Card.Body>
                            <Card.Title>{items.model}</Card.Title>
                            <Card.Text>
                                {items.desc}
                            </Card.Text>
                            <h5>Price : ₹ {items.price}</h5>
                            <div>
                                <p>Qty:
                                    <Button onClick={() => decQty(items.id)} className='m-1'>-</Button>{items.qty}
                                    
                                    <Button onClick={() => incQty(items.id)} className='m-1'>+</Button>
                                </p>
                            </div>
                            <Button className='m-1' variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                  </div>
                ))
            }

        </div>
    )
}

export default Products