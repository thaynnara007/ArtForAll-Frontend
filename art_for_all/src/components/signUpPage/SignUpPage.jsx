import React from 'react'
import './SignUpPage.css'
import Input from '../forms/input/InputFild'
import Navbar from '../navbar/Navbar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SignUpPage extends React.Component{
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
                        <Input></Input>
                        <label className="singUpForm-label">Last name:</label>
                        <Input></Input>
                        <label className="singUpForm-label">Username:</label>
                        <Input></Input>
                        <label className="singUpForm-label">Email:</label>
                        <Input></Input>
                        <label className="singUpForm-label">Password:</label>
                        <Input></Input>
                        <button type="button" class="btn btn-outline-success btn-lg btn-block spaace">Sign Up</button>
                        <br></br>
                    </div>  
            </div>
        </div>
        )
    }

}

export default SignUpPage