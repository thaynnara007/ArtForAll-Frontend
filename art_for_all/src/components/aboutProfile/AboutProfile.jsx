import React from "react";
import ProfilePicture from '../profilePicture/ProfilePicture';
import Navbar from "../navbar/Navbar";
import Input from '../forms/input/InputFild';
import './AboutProfile.css';
import image from '../../img/hisoka.jpg';


class AboutProfile extends React.Component{
    render(){
        return(
            <div className="font">
                <Navbar logado={true} userName="Th@y"></Navbar>
                <div className="aboutProfile-container">
                    <div className="aboutProfile-head">
                        <p className="aboutProfile-p">About</p>
                    </div>
                    <div className="aboutProfile-picture">
                        <ProfilePicture>{image}</ProfilePicture>
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
                        <div className="form-group">
                            <label for="Description" className="singUpForm-label">Description:</label>
                            <textarea className="form-control" id="Description"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="contact" className="singUpForm-label">Contact:</label>
                            <textarea className="form-control" id="contact"></textarea>
                        </div>
                        <button type="button" className="btn btn-outline-success btn-lg btn-block spaace">Save changes</button>
                    </div>
                    <br></br>
                </div>
                <br></br>
            </div>

        )
    }
}

export default AboutProfile;