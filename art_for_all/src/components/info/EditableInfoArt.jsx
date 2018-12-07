import React from 'react';
import './EditableInfoArt.css';
import InputFild from '../forms/input/InputFild';
import EditableTagBox from '../tagBox/EditableTagBox';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class EditableInfoArt extends React.Component{

    render(){
        return(
            <div className="container note">
            <details className="font">
                <summary className="font-weight-bold summary-margin">Informations</summary>
                <div className="border-style">
                    <label className="label-style">Art Name:</label>
                </div>
                <InputFild handleChange={this.props.handleChange} data="artName" placeHolder={this.props.info[0]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Author:</label>
                </div>
                <InputFild handleChange={this.props.handleChange} data="author" placeHolder={this.props.info[1]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Collection:</label>
                </div>
                <InputFild handleChange={this.props.handleChange} data="collection" placeHolder={this.props.info[2]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Description:</label>
                </div>
                <InputFild handleChange={this.props.handleChange} data="description" placeHolder={this.props.info[3]}></InputFild>
                <div className="border-style">
                    <label className="label-style">Contact:</label>
                </div>
                <InputFild handleChange={this.props.handleChange} data="contact" placeHolder={this.props.info[4]}></InputFild>
            </details>
            <EditableTagBox empty={this.props.empty} addTag={this.props.addTag} deleteTag={this.props.deleteTag} tagsName={this.props.tagsName} handleChange={this.props.handleChange}></EditableTagBox>
        </div>
        )
    }
}

export default EditableInfoArt;