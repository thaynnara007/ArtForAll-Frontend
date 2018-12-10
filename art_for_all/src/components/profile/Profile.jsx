import React from 'react';
import Navbar from '../navbar/Navbar';
import ProfileInfo from '../profileInfo/ProfileInfo';
import Artbox from '../artBox/ArtBox';
import './Profile.css';
import image from '../../img/me3.png';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            headFile: null,
            profileFile: image,
            userName: 'Th@y',
            numberArts: 21,
            following: 51,
            followers: 40,
        }
        this.editFile = this.editFile.bind(this);

    }

    editFile(event, data){
        
        var file = undefined;
        if(event.target.files[0]) file = URL.createObjectURL(event.target.files[0])
        else file = this.state.file;

        this.setState({
            [data]: file
        })
    }

    render(){

        return(
            <div className="profile-background">
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    <ProfileInfo editFile={this.editFile} 
                    headFile={this.state.headFile} 
                    profileFile={this.state.profileFile}
                    info={[this.state.userName, this.state.numberArts, this.state.following, this.state.followers]}></ProfileInfo>
                </div>
                <div className="profile-arts">
                    <Artbox></Artbox>
                </div>
            </div>
        )
    }
}

export default Profile;