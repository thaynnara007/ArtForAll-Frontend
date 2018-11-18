import React from 'react';
import './InputFild.css';

class InputFild extends React.Component{

    render(){
        return(
            <div className="input-group mb-3 space">
                <input type="text" className="form-control" placeholder={this.props.placeHolder} aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.props.handleChange}></input>
            </div>
        )
    }
}

export default InputFild;