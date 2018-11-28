import React from 'react'
import './SignUpPage.css'
import SingUpForm from '../forms/signUp/signUpForm'
import Navbar from '../navbar/Navbar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SignUpPage extends React.Component{

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <SingUpForm></SingUpForm>
            </div>
        )
    }

}

export default SignUpPage