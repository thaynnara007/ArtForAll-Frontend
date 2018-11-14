import React from 'react';
import TagBox from '../tagBox/TagBox';
import './Info.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Info extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'adventure'
        }
    }

    render(){
        return(
            <div className="container note">
                <details>
                    <summary className="font-weight-bold">Informations</summary>
                    <p>Art name: Adventure ends</p>
                    <p>Author: thay@ra</p>
                    <p>Collection: Adventure time</p>
                    <p>Description: its a art to express the end of the cartoon</p>
                </details>
                <TagBox></TagBox>
            </div>
        )
    }
}

export default Info;