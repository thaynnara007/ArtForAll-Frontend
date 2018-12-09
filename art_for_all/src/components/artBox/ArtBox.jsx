import React from 'react';
import Art from '../art/Art';
import EditableDetailsArtPage from '../detailsPage/EditableDetailsArtPage';
import './ArtBox.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ArtBox extends React.Component{
    constructor(props){
        super(props);

        this.state={
            open:true,
            newArt:false,
            arts: []
        }
        this.renderArts = this.renderArts.bind(this);
        this.hideArts = this.hideArts.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.openNewArt = this.openNewArt.bind(this);
        this.closeNewArt = this.closeNewArt.bind(this);
        this.addNewArt = this.addNewArt.bind(this);
    }

    renderArts(){

        if(this.state.open){
            var arts = this.state.arts.map((art, num) =>{
                return (<Art key={num} image={art}></Art>)
            })
            return arts;
        }else return null
    }

    hideArts(){
        this.setState({
            open: !this.state.open
        })
    }

    renderButton(){

        if(this.state.open){
            return (<button className="btn artBox-button" onClick={this.hideArts}>^</button>)
        }else{
            return (<button className="btn artBox-button" onClick={this.hideArts}>></button>)
        }
    }

    openNewArt(){
        this.setState({
            newArt: true
        })
    }

    closeNewArt(){
        this.setState({
            newArt:false
        })
    }

    addNewArt(file){
        var newArts = this.state.arts.concat(file);
        this.setState({
            arts: newArts
        })

        this.closeNewArt();
    }

    render(){
        return(
            <div className='font'>
                <div className="artBox-row">
                    <button className="btn btn-light artBox-newButton" onClick={this.openNewArt}>New</button>
                    <EditableDetailsArtPage open={this.state.newArt} hideModal={this.closeNewArt} save={this.addNewArt}></EditableDetailsArtPage>
                    {this.renderButton()}
                    <p className="artBox-font">My Arts</p>
                </div>
                <div className="artBox-container flex">
                    {this.renderArts()}
                </div>
            </div>
        )
    }
}

export default ArtBox;