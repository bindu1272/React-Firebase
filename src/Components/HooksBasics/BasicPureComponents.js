import React, { Component } from 'react';
class BasicPureComponents extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            name : "bindu"
        }
    }
    handler=()=>{
        console.log("hi bindu")
        this.setState({
            name : "jyothi"
        })
    }
    render(){
        console.log("hi");
        console.log(this.state.name);
        return(
            <div>
                <h1>Hi welcome to pure components</h1>
                <button onClick={this.handler}>Click Me</button>
            </div>
        )
    }
}
export default BasicPureComponents;