import React from 'react';
import InfoArt from '../info/InfoArt';
import EditableInfoArt from '../info/EditableInfoArt';
import image from '../../img/image-not-found.png';
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
            file: image,
            tag:"",
            empty: true
        }
        this.addTag = this.addTag.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
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
        console.log(this.state);
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
                            <EditableInfoArt empty={this.state.empty} 
                            info={[this.state.artName, this.state.author, this.state.collection, this.state.description, this.state.contact]} 
                            tagsName={this.state.tagsName} 
                            addTag={this.addTag} 
                            handleChange={this.handleChange} 
                            deleteTag={this.deleteTag}></EditableInfoArt>
                            <button className="btn btn-outline-primary btn-lg btn-block saveButton">Save</button>
                        </section> 
                    </div>
                </div>
        )
    }
}

export default EditableDetailsArtPage;