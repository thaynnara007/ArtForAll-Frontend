import React from 'react';
import Info from '../info/Info';
import image from '../../adventure.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './DetailsPage.css';

class DetailsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            information:["Adventure ends", "th@y", "Adventure Time", " Its a art to express the end of the cartoon", "thaynnara.goncalves@ccc.ufcg.edu.br"]
        }
    }

    render(){
        return(
            <div className="container max style">
                    <button className="close">x</button>
                    <div className="flex">
                        <img className="img-size" src={image} alt="adventure ends"></img>
                        <section className="info">
                            <Info info={this.state.information}></Info>
                        </section>
                    </div>
                </div>
        )
    }
}

export default DetailsPage;