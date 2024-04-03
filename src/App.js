
import React, { useState } from 'react'
import Card1 from './Components/Card1'
import NavbarComponent from './Components/NavbarComponent'
import ParentComponent from './Components/ParentComponent'
import FunctionalComponent from './Components/FunctionalComponent'
import ChildComponent from './Components/ChildComponent'
import ClassComponets from './Components/ClassComponets'
import Example from './Components/Example'
import { Carousel } from 'reactstrap'
import Carousale from './Components/Carousale'
import DropDown from './Components/DropDown'
function App() {
  const[showClassComponent,setShowClassComponent] = useState(true)
   const hello = ()=>{
     if(showClassComponent){
      setShowClassComponent(false)
     }else{
      setShowClassComponent(true)
     }
  }
  return (
   <div>
    <Example/>
    <Card1/>
    <Carousale/>
    <DropDown/>`  `
    </div>
  )
}

export default App