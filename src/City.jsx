import React, {Component} from "react";

class City extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.src} alt="" />
            </div>
        )
    }
}

export default City