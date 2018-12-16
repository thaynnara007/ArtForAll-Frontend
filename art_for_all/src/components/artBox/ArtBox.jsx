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
        }
        this.renderArts = this.renderArts.bind(this);
        this.hideArts = this.hideArts.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    renderArts(){

        if(this.state.open){
           
            var arts = this.props.arts.map((art, num) =>{
                return (<Art key={num} artName={art.artName} 
                    userName={this.props.userName} profileOwner={this.props.profileOwner}></Art>)
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

    render(){

        let head = "My Arts (" +(this.props.numberArts)+ ")"
        
        return(
            <div className='font'>
                <div className="artBox-row">
                    <button className="btn btn-info button artBox-newButton" onClick={this.props.open}>New</button>
                    <EditableDetailsArtPage open={this.props.newArt} 
                    hideModal={this.props.close} userName={this.props.userName}></EditableDetailsArtPage>
                    {this.renderButton()}
                    <p className="artBox-font">{head}</p>
                </div>
                <div className="artBox-container flex">
                    {this.renderArts()}
                </div>
            </div>
        )
    }
}

export default ArtBox;