import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent(props) {
  let {name,batch} = props
  return (
    <div>
        <h1>parent component</h1>
        <p>name is {props.name}</p>
        <p>batch number {props.batch}</p>
        <p>my name is {props.name} and batch number is {props.batch}</p>
        <ChildComponent/>

        <h1>parent component</h1>
        <p>name is {props.name}</p>
        <p>batch number {props.batch}</p>
        <p>my name is {props.name} and batch number is {props.batch}</p>
        <ChildComponent/>
    </div>
  )
}
export default ParentComponent
