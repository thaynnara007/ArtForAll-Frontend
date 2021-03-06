import React from 'react';
import InfoArt from '../info/InfoArt';
import firebase from '../../firebase';
import EditableInfoArt from '../info/EditableInfoArt';
import Api from '../Api';
import {ToastContainer, ToastStore} from 'react-toasts';
import image from '../../img/empty.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EditableDetailsArtPage.css';
import './DetailsArtPage.css';

class EditableDetailsArtPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            artName: "",
            author: "",
            collection: "",
            description: "",
            contact: "",
            tagsName: [],
            file: null,
            typeFile: null,
            url: null,
            tag:"",
            empty: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.storePhoto = this.storePhoto.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
        this.saveArt = this.saveArt.bind(this);
        this.addTag = this.addTag.bind(this);
        this.empty = this.empty.bind(this);
    }


    storePhoto(){

        var metadata = {contentType: this.state.typeFile};
        var path = this.props.userName + "/arts/" + this.state.artName 
        var storage = firebase.storage().ref();
        var uploadTask = storage.child(path).put(this.state.file, metadata);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function(snapshot){

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: 
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: 
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
            
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
            });
            ToastStore.success('Upload completed successfully');
        }
    )
} 

    addTag(){

        if(this.state.tag){
            var newTagsName = this.state.tagsName.concat(this.state.tag);
            this.setState({
                ['tagsName']: newTagsName,
                ['empty']: false
            })
        }
    }

    deleteTag(){

        if(this.state.tagsName){
            var size = this.state.tagsName.length;
            var newTagsName = this.state.tagsName.splice(0,size -1);
            var empty = newTagsName.length == 0 || false;

            this.setState({
                tagsName: newTagsName,
                empty: empty
            })
        }
    }

    handleChange(event, data){
        
        if (data != "file") this.setState({[data]: event.target.value})
        else{
            var file = undefined;
            var type = undefined;
            var url = undefined;
            if(event.target.files[0]){ 
                type = event.target.files[0].type
                file = event.target.files[0];
                url = URL.createObjectURL(file);
            }else{    
                file = this.state.file;
                type = this.state.type;
                url = this.state.url;
            }
            this.setState({
                file : file,
                typeFile : type,
                url: url
            })
        }
    }

    empty(word){
        return word.length === 0;
    }
    
    saveArt(event){
        event.preventDefault();

        var artName = this.state.artName;
        var author = this.state.author;
        var collection = this.state.collection;
        var description = this.state.description;
        var contact = this.state.contact;
        var tags = this.state.tagsName;
        
        if(!this.empty(artName) && !this.empty(author) && !this.empty(collection) &&
        !this.empty(description) && !this.empty(contact) && !this.empty(tags)){

            Api.post("user/me/profile/myArts", {
                artName, author, collection, description, contact, tags},{
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem('bazartToken')
                    }
                }).then((response) =>{

                    this.storePhoto();
                    ToastStore.success("Art added successfully")
                //    window.location.reload();
        
                }).catch((error) =>{
                    console.log(error);
                    ToastStore.error(error.message);
                })
        }else ToastStore.warning("There are filds still empty!");
    }

    renderImage(){
        return (<img className="img-size" src={(this.state.url != null) ? this.state.url : image} alt=""></img>)
    }

    render(){
        
        if(this.props.open){
            return(
                <div className="modal">
                    <div className="container max style">
                            <button className="close" onClick={this.props.hideModal}>x</button>
                            <div className="flex">
                                <div>
                                    <div>{this.renderImage()}</div> 
                                    <div className="editableDetailsArtPage-upload">
                                        <button className="btn btn-outline-success editableDetailsArtPage-uploadButton">Upload a file</button>
                                        <input type="file" name="myfile" onChange={ (event) => this.handleChange(event, "file")}/>
                                    </div>
                                </div>
                                <section className="info">
                                    <EditableInfoArt empty={this.state.empty} 
                                    info={[this.state.artName, this.state.author, this.state.collection, this.state.description, this.state.contact]} 
                                    tagsName={this.state.tagsName} 
                                    addTag={this.addTag} 
                                    handleChange={this.handleChange} 
                                    deleteTag={this.deleteTag}></EditableInfoArt>
                                    <button className="btn btn-outline-primary btn-lg btn-block saveButton" onClick={this.saveArt}>Save</button>
                                </section> 
                                <ToastContainer store={ToastStore}></ToastContainer>
                            </div>
                        </div>
                </div>
            )
        }else return null;
    }
}

export default EditableDetailsArtPage;