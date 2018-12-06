import React from 'react';
import InfoArt from '../info/InfoArt';
import EditableInfoArt from '../info/EditableInfoArt';
import image from '../../image-not-found.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './EditableDetailsArtPage.css';
import './DetailsArtPage.css';

class EditableDetailsArtPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            information:["Adventure ends", "th@y", "Adventure Time", " Its a art to express the end of the cartoon", "thaynnara.goncalves@ccc.ufcg.edu.br"],
            tagsName: ['Adventure time', "Finn", "Blood Sword", "Joshua"],
            file: image,
            tag:""
        }
        this.addTag = this.addTag.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

    addTag(){

        if(this.state.tag){
            var newTagsName = this.state.tagsName.concat(this.state.tag);
            this.setState({
                tagsName: newTagsName,
            })
        }
    }

    handleChange(event, data){

        if (data != "file"){
            this.setState({[data]: event.target.value})
        }
        else{

            var file = undefined;
            if(event.target.files[0]) file = URL.createObjectURL(event.target.files[0])
            else file = this.state.file;
            
            this.setState({
               [data]:file
            })
        }
    }
/*
    componentDidMount() {
        fetch('http://localhost:8080/user/miuda06/profile/myArts/adventureTime')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var tags =  data[0].tags;
                var info = [data[0].name]
                
                this.setState({ 
                    information: info,
                    tagsName: tags,
                    })});
    }
*/
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
                            <input className="browser-button" type="file" onChange={ (event) => this.handleChange(event, "file")}></input> 
                        </div>
                        <section className="info">
                            <EditableInfoArt info={this.state.information} tagsName={this.state.tagsName} addTag={this.addTag} handleChange={this.handleChange}></EditableInfoArt>
                            <button className="btn btn-outline-primary btn-lg btn-block saveButton">Save</button>
                        </section> 
                    </div>
                </div>
        )
    }
}

export default EditableDetailsArtPage;