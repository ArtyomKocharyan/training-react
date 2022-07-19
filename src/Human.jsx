import React, {Component} from "react";

class Human extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.profession}</h2>
                <img src={this.props.src} alt="" />
            </div>
        )
    }
}

export default Human