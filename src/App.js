import React from 'react'
import './App.css'
import Header from './Part3-Components/Header'
import Home from './Part3-Components/Home'
import Header1 from './Part5-Bootstrap/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactEvents from './Part5-Bootstrap/ReactEvents.jsx'
import Head from './Part7-useStateHook/Head.jsx'
import CounterTask from './Part7-useStateHook/CounterTask.jsx'
import States from './Part8-PROPS/States.jsx'
import {Container} from "react-bootstrap"
import Condition from './Part9-ConditionalRendering/Condition.jsx'
import Main from './Part9-ConditionalRendering/Main.jsx'
import Keys from './Part10-Keys/Keys.jsx'
import Products from './React Task-ProductList/Products.jsx'

function App() {

  const states=[
    {name:"Kerala",language:"Malayalam",population:100000},
    {name:"TamilNadu",language:"Tamil",population:200000},
    {name:"Karnataka",language:"Kannada",population:300000},
    {name:"AndhraPradesh",language:"Telugu",population:400000},
    {name:"Maharashtra",language:"Marathi",population:500000}
]




  return (
    <div className='App'>
    <>

     {/* <Header/>
    <Home/>
    <Header1/>
    <ReactEvents/> 
    <Head/>
    <CounterTask/> 
     <container>
    <States name={"Kerala"} language={"Malayalam"} population={10000}/>
     <States name={"TamilNadu"} language={"Tamil"} population={20000}/>
    <States name={"Karnataka"} language={"Kannada"} population={30000}/>
    <States name={"AndhraPradesh"} language={"Telugu"} population={10000}/>
    </container>  */}


{/*    
    <Container>
      <States states={states}/> 
    </Container> */}

    {/* <Condition/> */}
    {/* <Main isloggedin={false}/> */}
    {/* <Keys/> */}
    <Container>
       <Products/>
    </Container>

  </>
  </div>
  
  )
}

export default App