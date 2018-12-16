import React from 'react';
import './ProfilePicture.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ProfilePicture extends React.Component{

    render(){
        return(
                <div className="rounded-circle perfilPicture-container profilePicture-upload">
                    <img className="perfilPicture-size" src={this.props.children} alt="me"></img>
                    <input type="file" name="myfile" onChange={(event, data) => this.props.editFile(event, 'profileFile')}/>
                </div>
        
        )   
    }
}

export default ProfilePicture;