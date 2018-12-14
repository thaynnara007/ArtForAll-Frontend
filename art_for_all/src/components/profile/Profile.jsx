import React from 'react';
import Api from '../Api';
import Navbar from '../navbar/Navbar';
import ProfileInfo from '../profileInfo/ProfileInfo';
import Artbox from '../artBox/ArtBox';
import {ToastContainer, ToastStore} from 'react-toasts';
import './Profile.css';
import image from '../../img/me3.png';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            headFile: null,
            profileFile: image,
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
/*
    storePhoto(){
        
        var path = this.state.userName + "/profilePicture/" + this.state.profileFile;
        var storage = firebase.storage.ref();
        var uploadTask = storage.child(path).put(this.state.profileUrl);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function(snapshot){

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
            }
        },function(error) {

            switch (error.code) {
              case 'storage/unauthorized':
                    ToastStore.error('storage/unauthorized');
                break;
          
              case 'storage/canceled':
                ToastStore.error('storage/canceled');
                break;
          
              case 'storage/unknown':
                ToastStore.error('storage/unknown');
                break;
            }
          
        }, function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
            });
            ToastStore.success('Upload completed successfully');
        }
    )
} 
*/
    editFile(event, data){
        
        var file = undefined;

        if(event.target.files[0]) file = URL.createObjectURL(event.target.files[0])
        else if(data === "profileFile") file = this.state.profileFile;
        else if(data === "headFile") file = this.state.headFile;
    
       this.setState({
            [data]: file
        })
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