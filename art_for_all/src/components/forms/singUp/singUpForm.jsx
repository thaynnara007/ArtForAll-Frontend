import React from 'react'
import './singUpForm.css'
import Input from '../input/InputFild'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SingUpForm extends React.Component{
    render(){
        return (
            <div className="font container singUpForm-size singUpForm-color">
                <div className="singUpForm-header">
                    <p className="singUpForm-font">Sing Up</p>
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
                    <button type="button" class="btn btn-outline-success btn-lg btn-block spaace">Success</button>
                </div>  
        </div>
        )
    }

}

export default SingUpForm