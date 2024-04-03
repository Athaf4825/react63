import React, { Component } from 'react'

class ClassComponets extends Component {
  componentDidMount(){
    console.log("component  did mount")
  }
  componentDidUpdate(){
      console.log("component did update")
  }
  componentWillUnmount(){
    console.log("component unmont")
  }
    constructor(props) {
      console.log("constructor")
      super(props)
    
      this.state = {
         count:0
      }
    }
    hello = ()=>{
            this.setState({count:this.state.count+2})
        
    }
    hello1 = ()=>{
            if(this.state.count>0){
                this.setState({count:this.state.count-2})
            }
    }
    hello2 = ()=>{
        this.setState({count:this.state.count=0})
    }
  render() {
    console.log("render")
    return (
        <div>
      <div>ClassComponets {this.state.count} </div>
      <button onClick={this.hello}>Increament</button>
      <button onClick={this.hello1}>decrement</button>
      <button onClick={this.hello2}>reset</button>
      </div>
    )
  }
}

export default ClassComponets