import React from 'react';
import Art from '../art/Art';
import './ArtBox.css';
import image1 from '../../img/adventure.jpg';
import image2 from '../../img/hisoka.jpg';
import image3 from '../../img/mononoke.jpg';
import image4 from '../../img/oLabirintodoFalro.jpg';
import image5 from '../../img/overTheGardenWall.jpg';
import image6 from '../../img/seila.jpg';
import image7 from '../../img/steinsGate.jpg';
import image8 from '../../img/bokunohero.jpg';
import image9 from '../../img/bravest.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class ArtBox extends React.Component{
    constructor(props){
        super(props);

        this.state={
            open:true,
            arts: [image1, image2, image3, image4, image5, image6, image7, image8, image9]
        }
        this.renderArts = this.renderArts.bind(this);
        this.hideArts = this.hideArts.bind(this);
        this.renderButton = this.renderButton.bind(this);
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

    render(){
        return(
            <div className='font'>
                <div className="artBox-row">
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