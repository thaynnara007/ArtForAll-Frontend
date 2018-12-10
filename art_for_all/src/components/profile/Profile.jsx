import React from 'react';
import Navbar from '../navbar/Navbar';
import ProfileInfo from '../profileInfo/ProfileInfo';
import Artbox from '../artBox/ArtBox';
import './Profile.css';

class Profile extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div className="profile-background">
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    <ProfileInfo></ProfileInfo>
                </div>
                <div className="profile-arts">
                    <Artbox></Artbox>
                </div>
            </div>
        )
    }
}

export default Profile;