import React from 'react';
import ProfilePicture from '../profilePicture/ProfilePicture';
import { Link } from 'react-router-dom';
import './ProfileInfo.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ProfileInfo extends React.Component{
  
    render(){

        const USERNAME = 0;
        const NUMARTS = 1;
        const FOLLOWING = 2;
        const FOLLOWERS = 3;

        const style ={
            backgroundImage: 'url(' + (this.props.headFile) + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }
        
        const style2 = {
            backgroundColor: 'lightsteelblue'
        }

        var details = (this.props.info[NUMARTS])+ " arts | "+(this.props.info[FOLLOWING])+" fllowing | "+(this.props.info[FOLLOWERS])+" followers";

        return(
            <div className="font">
                <div className='profileInfo-head-img' style={this.props.headFile ? style : style2}>
                    <div className="float-rigth editableDetailsArtPage-upload">
                        <button className="btn profileInfo-upload">Edit</button>
                        <input type="file" name="myfile" onChange={(event, data) => this.props.editFile(event, 'headFile')}/>
                    </div>
                    <Link to={"/user/" + (this.props.profileOwner) +"/info"} className="btn float-rigth profileInfo-aboutButton">About</Link>
                    <button className="btn float-rigth profileInfo-followButton">Follow</button>
                    <div className="float-left profileInfo-profileFile">
                        <ProfilePicture editFile={this.props.editFile}>{this.props.profileFile}</ProfilePicture>
                    </div>
                    <p className="profileInfo-username float-left">{this.props.info[USERNAME]}</p>
                </div>
                <p className="profileInfo-details">{details}</p>
            </div>
        )
    }
}

export default ProfileInfo;