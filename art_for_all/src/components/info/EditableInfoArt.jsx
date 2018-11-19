import React from 'react';
import './EditableInfoArt.css';
import InputFild from '../forms/input/InputFild';
import EditableTagBox from '../tagBox/EditableTagBox';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class EditableInfoArt extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            info: ["adventure ends", "th@ay", "adventure time", "just because i love this cartoon", "thaynnara.goncalves@ccc..."],
            tagsName: [],
            artName:"",
            author:"",
            collection:"",
            description:"",
            contact:""
        }
        this.addTag = this.addTag.bind(this);
        this.handleArtName = this.handleArtName.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleCollection = this.handleCollection.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleContact = this.handleContact.bind(this);
    }

    addTag(tagName){

        if(tagName){
            var newTagsName = this.state.tagsName.concat(tagName);
            this.setState({
                info: this.state.info,
                tagsName: newTagsName,
                artName: this.state.artName,
                author: this.state.author,
                collection: this.state.collection,
                description: this.state.description,
                contact: this.state.contact
            })
        }
    }

    handleArtName(event){

        this.setState({
            info: this.state.info,
            tagsName: this.state.tagsName,
            artName: event.target.value,
            author: this.state.author,
            collection: this.state.collection,
            description: this.state.description,
            contact: this.state.contact
        })
    }

    handleAuthor(event){

        this.setState({
            info: this.state.info,
            tagsName: this.state.tagsName,
            artName: this.state.artName,
            author: event.target.value,
            collection: this.state.collection,
            description: this.state.description,
            contact: this.state.contact
        })
    }

    handleCollection(event){

        this.setState({
            info: this.state.info,
            tagsName: this.state.tagsName,
            artName: this.state.artName,
            author: this.state.author,
            collection: event.target.value,
            description: this.state.description,
            contact: this.state.contact
        })
    }

    handleDescription(event){

        this.setState({
            info: this.state.info,
            tagsName: this.state.tagsName,
            artName: this.state.artName,
            author: this.state.author,
            collection: this.state.collection,
            description: event.target.value,
            contact: this.state.contact
        })
    }

    handleContact(event){

        this.setState({
            info: this.state.info,
            tagsName: this.state.tagsName,
            artName: this.state.artName,
            author: this.state.author,
            collection: this.state.collection,
            description: this.state.description,
            contact: event.target.value
        })
    }

    render(){
        return(
            <div className="container note">
            <details className="font">
                <summary className="font-weight-bold summary-margin">Informations</summary>
                <div className="border-style">
                    <label className="label-style">Art Name:</label>
                </div>
                <InputFild handleChange={this.handleArtName} placeHolder={this.state.info[0]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Author:</label>
                </div>
                <InputFild handleChange={this.handleAuthor} placeHolder={this.state.info[1]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Collection:</label>
                </div>
                <InputFild handleChange={this.handleCollection} placeHolder={this.state.info[2]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Description:</label>
                </div>
                <InputFild handleChange={this.handleDescription} placeHolder={this.state.info[3]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Contact:</label>
                </div>
                <InputFild handleChange={this.handleContact} placeHolder={this.state.info[4]}></InputFild>
            </details>
            <EditableTagBox addTag={this.addTag} tagsName={this.state.tagsName}></EditableTagBox>
        </div>
        )
    }
}

export default EditableInfoArt;