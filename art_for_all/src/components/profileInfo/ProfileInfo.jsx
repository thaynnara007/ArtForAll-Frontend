import React from 'react';
import ProfilePicture from '../profilePicture/ProfilePicture';
import './ProfileInfo.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../img/jake.gif';
import image2 from '../../img/hisoka.jpg'

class ProfileInfo extends React.Component{
    constructor(props){
        super(props);

        this.state={
            headFile: image1,
            profileFile: null,
            userName: 'Th@y',
            numberArts: 21,
            following:51,
            followers: 40,
        }
    }

    render(){

        const style ={
            backgroundImage: 'url(' + (this.state.headFile) + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
                }
        
        const style2 = {
            backgroundColor: 'lightsteelblue'
        }

        var details = (this.state.numberArts)+ " arts | "+(this.state.following)+" fllowing | "+(this.state.followers)+" followers"

        return(
            <div className="font">
                <div className='profileInfo-head-img' style={this.state.headFile ? style : style2}>
                    <button className="btn float-rigth profileInfo-aboutButton">About</button>
                    <button className="btn float-rigth profileInfo-followButton">Follow</button>
                    <div className="float-left profileInfo-profileFile">
                        <ProfilePicture>{this.state.profileFile}</ProfilePicture>
                    </div>
                    <p className="profileInfo-username float-left">{this.state.userName}</p>
                </div>
                <p className="cu">{details}</p>
            </div>
        )
    }
}

export default ProfileInfo;