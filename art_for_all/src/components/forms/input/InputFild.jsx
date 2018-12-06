import React from 'react';

class InputFild extends React.Component{

    render(){
        return(
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder={this.props.placeHolder} aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(event) => this.props.handleChange(event, this.props.data)}></input>
            </div>
        )
    }
}

export default InputFild;