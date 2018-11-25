import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Tag.css';
import RandomColor from "randomcolor";

class Tag extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            color: this.putColor(),
            hasAcolor: false
        }
        this.putColor = this.putColor.bind(this);
    }

    putColor(){

        if (this.hasAcolor) return this.state.color;
        else{
            var newColor = RandomColor();
            this.setState({
                color: newColor,
                hasAcolor: true
            })
            return newColor
        }
    }

    render(){
        let style = {
            backgroundColor: this.state.color
          }
        return(
            <span className='badge badge-primary tag' style={style}>{this.props.tagName}</span>
        )
    }
}

export default Tag;