import React from 'react';
import './ProfilePicture.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from '../../img/me3.png';

class ProfilePicture extends React.Component{
    constructor(props){
        super(props);

        this.state={
            file: this.props.children || image
        }
        this.changePicture = this.changePicture.bind(this);
    }

    changePicture(event){

        var file = undefined;
        if(event.target.files[0]) file = URL.createObjectURL(event.target.files[0])
        else file = this.state.file;

        this.setState({
            file: file
        })
    }

    render(){
        return(
            <div className="rounded-circle perfilPicture-container profilePicture-upload">
                <img className="perfilPicture-size" src={this.state.file} alt="eu"></img>
                <input type="file" name="myfile" onChange={this.changePicture}/>
            </div>
        )   
    }
}

export default ProfilePicture;