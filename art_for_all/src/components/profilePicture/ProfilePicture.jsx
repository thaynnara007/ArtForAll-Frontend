import React from 'react';
import './ProfilePicture.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from '../../img/me3.png';

class ProfilePicture extends React.Component{

    render(){
        return(
                <div className="rounded-circle perfilPicture-container profilePicture-upload">
                    <img className="perfilPicture-size" src={this.props.children} alt="eu"></img>
                    <input type="file" name="myfile" onChange={(event, data) => this.props.editFile(event, 'profileFile')}/>
                </div>
        
        )   
    }
}

export default ProfilePicture;