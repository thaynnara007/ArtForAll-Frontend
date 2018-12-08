import React from 'react';
import InfoArt from '../info/InfoArt';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './DetailsArtPage.css';

class DetailsArtPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {

            information:["Totoro", "th@y", "Studio Ghibli", " Its a art to express the end of the cartoon", "thaynnara.goncalves@ccc.ufcg.edu.br"],
            tagsName: ['Totoro', "My neighborhood Totoro", "Studio Ghibli", "Hayao Miazaki", "Miazaki"],
            file: this.props.image
        }
    }

    render(){

        if (this.props.open){
            return(
                <div className='modal'>
                    <div className="container max style">
                            <button className="close" onClick={this.props.hideModal}>x</button>
                            <div className="flex">
                                <img className="img-size" src={this.state.file} alt="adventure ends"></img>
                                <section className="info">
                                    <InfoArt info={this.state.information} tagsName={this.state.tagsName}></InfoArt>
                                </section>
                            </div>
                        </div>
                </div>
            )
        }
        else return null;
    }
}

export default DetailsArtPage;