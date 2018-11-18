import React from 'react';
import InfoArt from '../info/InfoArt';
import image from '../../adventure.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './DetailsArtPage.css';

class DetailsArtPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            information:["Adventure ends", "th@y", "Adventure Time", " Its a art to express the end of the cartoon", "thaynnara.goncalves@ccc.ufcg.edu.br"],
            tagsName: ['Adventure time', "Finn", "Blood Sword", "Joshua"]
        }
    }

    render(){
        return(
            <div className="container max style">
                    <button className="close">x</button>
                    <div className="flex">
                        <img className="img-size" src={image} alt="adventure ends"></img>
                        <section className="info">
                            <InfoArt info={this.state.information} tagsName={this.state.tagsName}></InfoArt>
                        </section>
                    </div>
                </div>
        )
    }
}

export default DetailsArtPage;