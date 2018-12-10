import React from 'react';
import Input from '../forms/input/InputFild';
import Navbar from '../navbar/Navbar';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userName:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data){
        this.setState({[data]: event.target.value})
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div className="font container singUpForm-size singUpForm-color">
                    <div className="singUpForm-header">
                        <p className="singUpForm-font">Login</p>
                    </div>
                    <div className="singUpForm-space">
                        <label className="singUpForm-label">Username:</label>
                        <Input handleChange={this.handleChange} data="userName"></Input>
                        <label className="singUpForm-label">Password:</label>
                        <Input handleChange={this.handleChange} data="password"></Input>
                        <button type="button" className="btn btn-outline-success btn-lg btn-block spaace">Sign In</button>
                        <br></br>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Login;