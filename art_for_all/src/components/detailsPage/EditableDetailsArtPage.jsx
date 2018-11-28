import React from 'react';
import InfoArt from '../info/InfoArt';
import EditableInfoArt from '../info/EditableInfoArt';
import image from '../../TG5CxZ.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EditableDetailsArtPage.css';
import './DetailsArtPage.css';

class EditableDetailsArtPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            information:["Adventure ends", "th@y", "Adventure Time", " Its a art to express the end of the cartoon", "thaynnara.goncalves@ccc.ufcg.edu.br"],
            tagsName: ['Adventure time', "Finn", "Blood Sword", "Joshua"],
            file: image
        }
        this.addTag = this.addTag.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

    addTag(tagName){

        if(tagName){
            var newTagsName = this.state.tagsName.concat(tagName);
            this.setState({
                info: this.state.info,
                tagsName: newTagsName,
            })
        }
    }

    handleChange(event){
        
        this.setState({
            information: this.state.information,
            tagsName: this.state.tagsName,
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    renderImage(){
        
        if (this.state.file)
            return (<img className="img-size" src={this.state.file} alt=""></img>)
        else return null
    }

    render(){
        return(
            <div className="container max style">
                    <button className="close">x</button>
                    <div className="flex">
                        <div>
                            <div>{this.renderImage()}</div> 
                            <input className="browser-button" type="file" onChange={this.handleChange}></input> 
                        </div>
                        <section className="info">
                            <EditableInfoArt info={this.state.information} tagsName={this.state.tagsName} addTag={this.addTag}></EditableInfoArt>
                            <button className="btn btn-outline-primary btn-lg btn-block saveButton">Save</button>
                        </section> 
                    </div>
                </div>
        )
    }
}

export default EditableDetailsArtPage;