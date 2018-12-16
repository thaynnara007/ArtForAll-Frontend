import React from 'react';
import firebase from '../../firebase';
import DetailsArtPage from '../detailsPage/DetailsArtPage';
import './Art.css';

class Art extends React.Component{

    constructor(props){
        super(props)

        this.state={
            openDetails: false,
            image: null,
        }
        this.displayImage = this.displayImage.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount(){
        this.displayImage();
    }

    renderImage(){
        return (<img className="art-img-size" src={this.state.image} alt={this.props.artName} onClick={this.showModal}></img>)
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

    displayImage(){

        var storage = firebase.storage().ref();
        var path = "/" +this.props.userName + "/arts/" +this.props.artName;
        var artRef = storage.child(path);

        artRef.getDownloadURL().then((url) =>{

            this.setState({
                image : url
            })
           
        }).catch((error) => {
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <div>
                    {this.renderImage()}
                </div>
                <div>
                    <DetailsArtPage open={this.state.openDetails} hideModal={this.hideModal} 
                    profileOwner={this.props.profileOwner} artName={this.props.artName} 
                    image={this.state.image}></DetailsArtPage>
                </div>
            </div>
        )
    }
}

export default Art;