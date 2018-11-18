import React from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './nameFild.css';

class NameFild extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            inputData: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            inputData: event.target.value
        })
    }

    render(){

        if(this.props.open){
            return(
                <div className="input-group mb-3 space">
                    <input type="text" className="form-control" placeholder={this.props.placeHolder} aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleChange}></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-info" type="button" onClick={() => this.props.onClick(this.state.inputData)}>{this.props.buttonName}</button>
                    </div>
                </div>
            )
        }else return null;
    }
}

export default NameFild;