import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Tag.css';
import RandomColor from "randomcolor";

class Tag extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            color: null,
        }
    }

    componentDidMount(){
        var color = RandomColor();

        this.setState({
            color: color
        })
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