import React, { useEffect, useState } from 'react'

function FunctionalComponent() {
    let [count,setCount] = useState(0)
    useEffect(()=>{
      console.log("mounting phase")
      return ()=>{
        console.log("unmount phase")
      }
    },[])

    useEffect(()=>{
      console.log("updating phase")
    },[count])
  
    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleIncrement1 = ()=>{
       if(count>0){
        setCount(count-1)
       }
         
    }
    const hello = ()=>{
      setCount(count=0)
    }
  return (
    <div>
        <h1>count {count} </h1>
        <button onClick = {handleIncrement}> Increament</button>
        <button onClick = {handleIncrement1}>decrement</button>
        <button onClick = {hello}>reset</button>
    </div>
  )
}

export default FunctionalComponent