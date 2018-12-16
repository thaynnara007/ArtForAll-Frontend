import React from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './nameFild.css';

class NameFild extends React.Component{

    render(){

        if(this.props.open){
            return(
                <div className="input-group mb-3 space">
                    <input type="text" className="form-control" placeholder={this.props.placeHolder} 
                    aria-label="Recipient's username" aria-describedby="basic-addon2" 
                    onChange={(this.props.use)? (event) => this.props.handleChange(event, this.props.data) : null}></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-info" type="button" 
                        onClick={(this.props.use)? this.props.onClick : null}>{this.props.buttonName}</button>
                    </div>
                </div>
            )
        }else return null;
    }
}

export default NameFild;