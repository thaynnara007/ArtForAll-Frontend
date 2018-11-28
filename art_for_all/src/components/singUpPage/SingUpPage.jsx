import React from 'react'
import './SingUpPage.css'
import SingUpForm from '../forms/singUp/singUpForm'
import Navbar from '../navbar/Navbar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SingUpPage extends React.Component{

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <SingUpForm></SingUpForm>
            </div>
        )
    }

}

export default SingUpPage