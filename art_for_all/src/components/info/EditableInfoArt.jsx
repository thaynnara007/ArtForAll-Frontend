import React from 'react';
import './EditableInfoArt.css';
import InputFild from '../forms/input/InputFild';
import EditableTagBox from '../tagBox/EditableTagBox';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class EditableInfoArt extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            artName:"",
            author:"",
            collection:"",
            description:"",
            contact:""
        }
        this.handleArtName = this.handleArtName.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleCollection = this.handleCollection.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleContact = this.handleContact.bind(this);
    }


    handleArtName(event){

        this.setState({
            artName: event.target.value,
            author: this.state.author,
            collection: this.state.collection,
            description: this.state.description,
            contact: this.state.contact
        })
    }

    handleAuthor(event){

        this.setState({
            artName: this.state.artName,
            author: event.target.value,
            collection: this.state.collection,
            description: this.state.description,
            contact: this.state.contact
        })
    }

    handleCollection(event){

        this.setState({
            artName: this.state.artName,
            author: this.state.author,
            collection: event.target.value,
            description: this.state.description,
            contact: this.state.contact
        })
    }

    handleDescription(event){

        this.setState({
            artName: this.state.artName,
            author: this.state.author,
            collection: this.state.collection,
            description: event.target.value,
            contact: this.state.contact
        })
    }

    handleContact(event){

        this.setState({
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
                <InputFild handleChange={this.handleArtName} placeHolder={this.props.info[0]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Author:</label>
                </div>
                <InputFild handleChange={this.handleAuthor} placeHolder={this.props.info[1]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Collection:</label>
                </div>
                <InputFild handleChange={this.handleCollection} placeHolder={this.props.info[2]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Description:</label>
                </div>
                <InputFild handleChange={this.handleDescription} placeHolder={this.props.info[3]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Contact:</label>
                </div>
                <InputFild handleChange={this.handleContact} placeHolder={this.props.info[4]}></InputFild>
            </details>
            <EditableTagBox addTag={this.props.addTag} tagsName={this.props.tagsName}></EditableTagBox>
        </div>
        )
    }
}

export default EditableInfoArt;