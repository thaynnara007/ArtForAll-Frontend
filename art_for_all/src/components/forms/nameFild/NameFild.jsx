import React from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        return(
            <form>
                <label>Name</label>
                <input type="text" value={this.state.inputData} onChange={this.props.handleChange} placeholder="tag name"></input>
                <button className="btn btn-outline-success" onClick={() => this.props.onClick(this.state.inputData)}>Add</button>
            </form>
        )
    }
}

export default NameFild