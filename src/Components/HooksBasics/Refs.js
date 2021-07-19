import React, { Component, createRef } from 'react';
class Refs extends Component{
    constructor(){
        super();
        this.textInput = React.createRef();
    }
    handleName = ()=>{
        this.textInput.current.focus();
    }
    render(){
        console.log("hi");
        return(
            <div>
            <input
              type="text"
              ref={this.textInput} />
            <input
              type="button"
              value="Focus the text input"
              onClick={this.handleName}
            />
          </div>
        )
    }
}
export default Refs;