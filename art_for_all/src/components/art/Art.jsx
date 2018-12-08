import React from 'react';
import image from '../../img/totoro.jpg';
import Tag from '../tag/Tag';
import './Art.css';

class Art extends React.Component{

    constructor(props){
        super(props)

        this.state={
            file: image,
            id: undefined,
            artName: 'totoro',
            openDetails: false
        }
        this.renderImage = this.renderImage.bind(this);
    }

    renderImage(){

        if(this.state.file){
            return (<img className="art-img-size" src={this.state.file} alt={this.state.artName}></img>)
        }
        else return null;
    }

    render(){
        
        return(
            <div>
                <div>
                    {this.renderImage()}
                </div>
            </div>
        )
    }
}

export default Art;