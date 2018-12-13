import React from 'react';
import axios from 'axios';
import Redirect from 'react-router-dom';
import Api from '../Api';
import {ToastContainer, ToastStore} from 'react-toasts';
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
        this.login = this.login.bind(this);
        this.empty = this.empty.bind(this);
        this.saveToken = this.saveToken.bind(this);
    }

    handleChange(event, data){
        this.setState({[data]: event.target.value})
    }

    empty(word){
        return word.length === 0;
    }

    saveToken(response){
        var res = response.data;
        localStorage.setItem('userId', res.userId);
        localStorage.setItem("token", res.token);
    }

    login(event){
        event.preventDefault();

        var userName = this.state.userName;
        var password = this.state.password;

        if(!this.empty(userName) && !this.empty(password)){

            Api.post('login/', {userName, password})
            .then((response) =>{
                this.saveToken(response);
                this.props.history.push('user/me/profile');
            })
            .catch((error) =>{
                console.log(error);
                ToastStore.error("User name or password invalid");
            })

        }else ToastStore.warning("There are filds still empty!");
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
                        <button type="button" className="btn btn-outline-success btn-lg btn-block spaace" onClick={this.login}>Sign In</button>
                        <ToastContainer store={ToastStore}></ToastContainer>
                        <br></br>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Login;