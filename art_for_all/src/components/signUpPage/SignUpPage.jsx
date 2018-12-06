import React from 'react'
import './SignUpPage.css'
import Input from '../forms/input/InputFild'
import Navbar from '../navbar/Navbar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SignUpPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            password:"",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data){
        this.setState({[data]: event.target.value})
    }

    render(){
        return (

            <div>
                <Navbar></Navbar>
                <div className="font container singUpForm-size singUpForm-color">
                    <div className="singUpForm-header">
                        <p className="singUpForm-font">Register</p>
                    </div>
                    <div className="singUpForm-space">
                        <label className="singUpForm-label">First name:</label>
                        <Input handleChange={this.handleChange} data="firstName"></Input>
                        <label className="singUpForm-label">Last name:</label>
                        <Input handleChange={this.handleChange} data="lastName"></Input>
                        <label className="singUpForm-label">Username:</label>
                        <Input handleChange={this.handleChange} data="userName"></Input>
                        <label className="singUpForm-label">Email:</label>
                        <Input handleChange={this.handleChange} data="email"></Input>
                        <label className="singUpForm-label">Password:</label>
                        <Input handleChange={this.handleChange} data="password"></Input>
                        <button type="button" className="btn btn-outline-success btn-lg btn-block spaace">Sign Up</button>
                        <br></br>
                    </div>  
            </div>
        </div>
        )
    }

}

export default SignUpPage