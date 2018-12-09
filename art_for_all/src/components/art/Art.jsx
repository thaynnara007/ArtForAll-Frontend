import React from 'react';
import image from '../../img/totoro.jpg';
import DetailsArtPage from '../detailsPage/DetailsArtPage';
import EditableDetailsArtPage from '../detailsPage/EditableDetailsArtPage';
import './Art.css';

class Art extends React.Component{

    constructor(props){
        super(props)

        this.state={
            file: this.props.image,
            id: undefined,
            artName: 'totoro',
            openDetails: false
        }
        this.renderImage = this.renderImage.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    renderImage(){

        if(this.state.file){
            return (<img className="art-img-size" src={this.state.file} alt={this.state.artName} onClick={this.showModal}></img>)
        }
        else return null;
    }

    showModal(){
        this.setState({
            openDetails : true
        })
    }

    hideModal(){
        this.setState({
            openDetails: false
        })
    }

    render(){
        
        return(
            <div>
                <div>
                    {this.renderImage()}
                </div>
                <div>
                    <DetailsArtPage open={this.state.openDetails} hideModal={this.hideModal} image={this.state.file}></DetailsArtPage>
                </div>
            </div>
        )
    }
}

export default Art;