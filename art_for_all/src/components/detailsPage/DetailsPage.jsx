import React from 'react';
import Info from '../info/Info';
import image from './j2LDHX0.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './DetailsPage.css';

class DetailsPage extends React.Component{

    render(){
        return(
            <div className="container max">
                    <img className="img-size" src={image} alt="image"></img>
                    <div className="float-rigth">
                        <Info></Info>
                    </div>
                </div>
        )
    }
}

export default DetailsPage;