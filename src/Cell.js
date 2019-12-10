import React, { Component } from 'react';

export default class Cell extends Component {
     
    constructor(props) {
        super()
        this.state = {
            color:props.value,
<<<<<<< HEAD
        } 
        // ...define initial state with a key of 'color' set to the 'value' prop
      }
     newColor=(color)=>{
      this.setState({
          color:color
=======
        } // ...define initial state with a key of 'color' set to the 'value' prop
      }
      updatState=()=>{
      this.setState({
          color:'#333'
>>>>>>> 9b01038afdd53a630a4a332911e86f77d5095d14
      })}

  render() {
    return (
<<<<<<< HEAD
      <div className="cell" style={{backgroundColor:this.state.color}} onClick={()=>this.newColor( '#333')}>
=======
      <div className="cell" style={{backgroundColor:this.state.color}} onClick={this.updatState}>
>>>>>>> 9b01038afdd53a630a4a332911e86f77d5095d14
      </div>
    )
  }
  
}