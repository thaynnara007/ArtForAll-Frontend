import React from 'react';
import Api from '../Api';
import Navbar from '../navbar/Navbar';
import ProfileInfo from '../profileInfo/ProfileInfo';
import Artbox from '../artBox/ArtBox';
import {ToastContainer, ToastStore} from 'react-toasts';
import firebase, {storage} from '../../firebase';
import './Profile.css';
import image from '../../img/me3.png';


var config = {
    apiKey: "AIzaSyBhd0wO2Bvzd3ZgDEROLg4lHCbOy4l9Hjw",
    authDomain: "bazart-6b8a5.firebaseapp.com",
    databaseURL: "https://bazart-6b8a5.firebaseio.com",
    projectId: "bazart-6b8a5",
    storageBucket: "bazart-6b8a5.appspot.com",
    messagingSenderId: "873184868112"
  };
  firebase.initializeApp(config);


class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            headFile: null,
            profileFile: image,
            profileUrl: null,
            arts: [],
            userName: '',
            numberArts: 0,
            following: 0,
            followers: 0,
            openNewArt: false,
            logado: true,
            profileOwner: this.props.match.params.userName
        }
        this.logout = this.logout.bind(this);
        this.editFile = this.editFile.bind(this);
        this.openNewArt = this.openNewArt.bind(this);
        this.closeNewArt = this.closeNewArt.bind(this);
    }

    componentDidMount(){
        Api.get("user/me/profile", {
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
        .then( (response) =>{

            var arts = response.data.userArts.map((art) =>{
                return {artName: art.name}
            })

            this.setState({
                arts: arts,
                userName: response.data.userName,
                numberArts: response.data.userArts.length,
                following: response.data.followingNumber,
                followers: response.data.followersNumber
            })
        }).catch((error) =>{
            console.log(error);
            ToastStore.error(error.message);
        })
    }

    logout(){
        localStorage.clear();
        this.props.history.push('/')
    }

    editFile(event, data){
        
        var file = undefined;
        var url = undefined;

        if(event.target.files[0]){
            file = event.target.files[0]
            url = URL.createObjectURL(event.target.files[0])
        }
        else if(data === "profileFile"){
            file = this.state.profileFile;
            url = this.state.profileUrl
        }
        else if(data === "headFile") file = this.state.headFile;

        if(data === "profileFile"){
            this.setState({
                profileFile: file,
                profileUrl : url
            })
        }
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
                    <Navbar logado={this.state.logado} userName={this.state.userName} logout={this.logout}></Navbar>
                </div>
                <div>
                    <ProfileInfo 
                    profileOwner={this.state.profileOwner}
                    editFile={this.editFile} 
                    headFile={this.state.headFile} 
                    profileFile={this.state.profileFile}
                    info={[this.state.userName, this.state.numberArts, this.state.following, this.state.followers]}>
                    </ProfileInfo>
                </div>
                <div className="profile-arts">
                    <Artbox
                        profileOwner={this.state.profileOwner}
                        arts={this.state.arts}
                        numberArts={this.state.numberArts}
                        newArt={this.state.openNewArt}
                        open={this.openNewArt}
                        close={this.closeNewArt}
                    ></Artbox>
                </div>
                <ToastContainer store={ToastStore}></ToastContainer>
            </div>
        )
    }
}

export default Profile;