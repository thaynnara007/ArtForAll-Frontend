import React from "react";
import Api from '../Api';
import {ToastContainer, ToastStore} from 'react-toasts';
import ProfilePicture from '../profilePicture/ProfilePicture';
import Navbar from '../navbar/Navbar';
import Input from '../forms/input/InputFild';
import Text from '../forms/textArea/Text';
import image from '../../img/me3.png';
import './AboutProfile.css';

class AboutProfile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userName:"",
            profileFile: image,
            firstName: "",
            lastName: "",
            email: "",
            contact: '',
            description: ''
        }
        this.editProfilePicture = this.editProfilePicture.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        var profileOwner = this.props.match.params.userName;
        var path = "user/" + (profileOwner) + "/info";
        Api.get(path, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
        .then((response) =>{
            
            var data = response.data;
            this.setState({
                contact: data.contact,
                description: data.description,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.userName
            })
        }).catch((error) =>{
            console.log(error);
            ToastStore.error(error.message);
        })
    }

    editProfilePicture(event){
        
        var file = undefined;
        if(event.target.files[0]) file = URL.createObjectURL(event.target.files[0]);
        else file = this.state.profileFile;

        this.setState({
            profileFile: file
        })
    }

    handleChange(event, data){
        this.setState({
            [data]:event.target.value
        })
    }

    render(){
        return(
            <div className="font">
                <Navbar logado={true} userName={this.state.userName}></Navbar>
                <div className="aboutProfile-container">
                    <div className="aboutProfile-head">
                        <p className="aboutProfile-p">About</p>
                    </div>
                    <div className="aboutProfile-picture">
                        <ProfilePicture editFile={this.editProfilePicture}>{this.state.profileFile}</ProfilePicture>
                    </div>
                    <div className="singUpForm-space">
                        <label className="singUpForm-label">First name:</label>
                        <Input handleChange={this.handleChange} data="firstName" placeHolder={this.state.firstName}></Input>
                        <label className="singUpForm-label">Last name:</label>
                        <Input handleChange={this.handleChange} data="lastName" placeHolder={this.state.lastName}></Input>
                        <label className="singUpForm-label">Username:</label>
                        <Input handleChange={this.handleChange} data="userName" placeHolder={this.state.userName}></Input>
                        <label className="singUpForm-label">Email:</label>
                        <Input handleChange={this.phandleChange} data="email" placeHolder={this.state.email}></Input>
                        <label className="singUpForm-label">Contact:</label>
                        <Text handleChange={this.handleChange} data="contact" placeHolder={this.state.contact}></Text>
                        <label className="singUpForm-label">Description:</label>
                        <Text handleChange={this.handleChange} data="description" placeHolder={this.state.description}></Text>
                        <button type="button" className="btn btn-outline-success btn-lg btn-block spaace">Save changes</button>
                    </div>
                    <ToastContainer store={ToastStore}></ToastContainer>
                    <br></br>
                </div>
                <br></br>
            </div>
        )
    }
}

export default AboutProfile;