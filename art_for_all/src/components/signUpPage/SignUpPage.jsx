import React from 'react';
import axios from 'axios';
import {ToastContainer, ToastStore} from 'react-toasts';
import './SignUpPage.css';
import Input from '../forms/input/InputFild';
import Navbar from '../navbar/Navbar';
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
        this.register = this.register.bind(this);
        this.empty = this.empty.bind(this);
    }

    empty(word){
        return word.length === 0;
    }

    handleChange(event, data){
        this.setState({[data]: event.target.value})
    }

    register(event){
        event.preventDefault();

        var firstName = this.state.firstName;
        var lastName = this.state.lastName;
        var userName = this.state.userName;
        var email = this.state.email;
        var password = this.state.password;

        if(!this.empty(firstName) && !this.empty(lastName) && !this.empty(userName)
            && !this.empty(email) && !this.empty(password)){
        
            axios.post('http://localhost:8080/user', {firstName, lastName, userName, email, password})
            .then((response) => {
                ToastStore.success(response.data);
            }) .catch((error) => {
                console.log(error); 
                ToastStore.error(error.message);
            });
        }else ToastStore.warning("There are filds that are still empty!");
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
                        <button type="button" className="btn btn-outline-success btn-lg btn-block spaace" onClick={this.register}>Sign Up</button>
                        <ToastContainer store={ToastStore}></ToastContainer>
                        <br></br>
                    </div>  
                </div>
            </div>
        )
    }

}

export default SignUpPage