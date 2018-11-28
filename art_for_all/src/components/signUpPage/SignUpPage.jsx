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

        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleFirstName(event){

        this.setState({
            firstName: event.target.value,
            lastName: this.state.lastName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
        })
    }

    handleLastName(event){

        this.setState({
            firstName: this.state.firstName,
            lastName: event.target.value,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
        })
    }

    handleUserName(event){

        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: event.target.value,
            email: this.state.email,
            password: this.state.password,
        })
    }
    
    handleEmail(event){

        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName:  this.state.userName,
            email: event.target.value,
            password: this.state.password,
        })
    }

    handlePassword(event){

        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName:  this.state.userName,
            email: this.state.email,
            password: event.target.value,
        })
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
                        <Input handleChance={this.handleFirstName}></Input>
                        <label className="singUpForm-label">Last name:</label>
                        <Input handleChance={this.handleLastName}></Input>
                        <label className="singUpForm-label">Username:</label>
                        <Input handleChance={this.handleUserName}></Input>
                        <label className="singUpForm-label">Email:</label>
                        <Input handleChance={this.handleEmail}></Input>
                        <label className="singUpForm-label">Password:</label>
                        <Input handleChance={this.handlePassword}></Input>
                        <button type="button" class="btn btn-outline-success btn-lg btn-block spaace">Sign Up</button>
                        <br></br>
                    </div>  
            </div>
        </div>
        )
    }

}

export default SignUpPage