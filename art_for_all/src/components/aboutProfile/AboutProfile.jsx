import React from "react";
import ProfilePicture from '../profilePicture/ProfilePicture';
import Input from '../forms/input/InputFild';
import Text from '../forms/textArea/Text';
import './AboutProfile.css';


class AboutProfile extends React.Component{
    render(){
        return(
            <div className="font">
                <div className="aboutProfile-container">
                    <div className="aboutProfile-head">
                        <p className="aboutProfile-p">About</p>
                    </div>
                    <div className="aboutProfile-picture">
                        <ProfilePicture editFile={this.props.editFile}>{this.props.image}</ProfilePicture>
                    </div>
                    <div className="singUpForm-space">
                        <label className="singUpForm-label">First name:</label>
                        <Input handleChange={this.props.handleChange} data="firstName"></Input>
                        <label className="singUpForm-label">Last name:</label>
                        <Input handleChange={this.props.handleChange} data="lastName"></Input>
                        <label className="singUpForm-label">Username:</label>
                        <Input handleChange={this.props.handleChange} data="userName"></Input>
                        <label className="singUpForm-label">Email:</label>
                        <Input handleChange={this.props.handleChange} data="email"></Input>
                        <label className="singUpForm-label">Contact:</label>
                        <Text handleChange={this.props.handleChange} data="contact"></Text>
                        <label className="singUpForm-label">Description:</label>
                        <Text handleChange={this.props.handleChange} data="description"></Text>
                        <button type="button" className="btn btn-outline-success btn-lg btn-block spaace">Save changes</button>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default AboutProfile;