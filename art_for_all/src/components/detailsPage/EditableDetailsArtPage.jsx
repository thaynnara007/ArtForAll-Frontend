import React from 'react';
import InfoArt from '../info/InfoArt';
import EditableInfoArt from '../info/EditableInfoArt';
import image from '../../adventure.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EditableDetailsArtPage.css';
import './DetailsArtPage.css';

class EditableDetailsArtPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            information:["Adventure ends", "th@y", "Adventure Time", " Its a art to express the end of the cartoon", "thaynnara.goncalves@ccc.ufcg.edu.br"],
            tagsName: ['Adventure time', "Finn", "Blood Sword", "Joshua"]
        }
        this.addTag = this.addTag.bind(this);
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

    render(){
        return(
            <div className="container max style">
                    <button className="close">x</button>
                    <div className="flex">
                        <img className="img-size" src={image} alt="adventure ends"></img>
                        <section className="info">
                            <EditableInfoArt info={this.state.information} tagsName={this.state.tagsName} addTag={this.addTag}></EditableInfoArt>
                        </section>
                    </div>
                </div>
        )
    }
}

export default EditableDetailsArtPage;