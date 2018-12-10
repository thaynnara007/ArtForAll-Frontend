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
            arts: [],
            userName: 'Th@y',
            numberArts: 0,
            following: 51,
            followers: 40,
            openNewArt: false,
            logado: true
        }
        this.editFile = this.editFile.bind(this);
        this.addNewArt = this.addNewArt.bind(this);
        this.openNewArt = this.openNewArt.bind(this);
        this.closeNewArt = this.closeNewArt.bind(this);

    }

    editFile(event, data){
        
        var file = undefined;
        if(event.target.files[0]) file = URL.createObjectURL(event.target.files[0])
        else if(data === "profileFile") file = this.state.profileFile;
        else if(data === "headFile") file = this.state.headFile;

        this.setState({
            [data]: file
        })
    }

    addNewArt(file){

        if(file){
            var newArts = this.state.arts.concat(file);
            this.setState({
                arts: newArts,
                numberArts: this.state.numberArts + 1
            })
        }
        this.closeNewArt()
    }

    openNewArt(){
        this.setState({
            openNewArt: true
        })
    }

    closeNewArt(){
        this.setState({
            openNewArt:false
        })
    }

    render(){

        return(
            <div className="profile-background">
                <div>
                    <Navbar logado={this.state.logado} userName={this.state.userName}></Navbar>
                </div>
                <div>
                    <ProfileInfo 
                    editFile={this.editFile} 
                    headFile={this.state.headFile} 
                    profileFile={this.state.profileFile}
                    info={[this.state.userName, this.state.numberArts, this.state.following, this.state.followers]}>
                    </ProfileInfo>
                </div>
                <div className="profile-arts">
                    <Artbox
                        arts={this.state.arts}
                        numberArts={this.state.numberArts}
                        addNewArt={this.addNewArt}
                        newArt={this.state.openNewArt}
                        open={this.openNewArt}
                        close={this.closeNewArt}
                    ></Artbox>
                </div>
            </div>
        )
    }
}

export default Profile;