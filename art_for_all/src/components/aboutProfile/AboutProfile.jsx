import React from "react";
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
            userName:"Th@y",
            profileFile: image,
            firstName: "Thaynnara",
            lastName: "Gonçalves",
            email: "thaynnara.goncalves@ccc.ufcg.edu.br",
            contact: 'whatsApp, telegram: 8393333-3333',
            description: 'I am a brazilian artist in my free time :)'
        }
        this.editProfilePicture = this.editProfilePicture.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
                    <br></br>
                </div>
            </div>
        )
    }
}

export default AboutProfile;