import React, {Component} from "react";

class Famous extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.info}</p>
        </div>
        )
    }
}

export default Famous