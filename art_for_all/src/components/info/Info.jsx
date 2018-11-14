import React from 'react';
import TagBox from '../tagBox/TagBox';
import './Info.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Info extends React.Component{

    render(){

        const ART_NAME = 0;
        const AUTHOR = 1;
        const COLLECTION = 2;
        const DESCRIPTION = 3;

        return(
            <div className="container note">
                <details className="font">
                    <summary className="font-weight-bold summary-margin">Informations</summary>
                    <div className="back">
                        <label className="label-style">Art Name:</label>
                    </div>
                    <p>Adventure ends</p>
                    <div className="back ">
                        <label className="label-style">Author:</label>
                    </div>
                    <p>thay@ra</p>
                    <div className="back">
                        <label className="label-style">Collection:</label>
                    </div>
                    <p>Adventure time</p>
                    <div className="back">
                        <label className="label-style">Description:</label>
                    </div>
                    <p>Description: its a art to express the end of the cartoon</p>
                </details>
                <TagBox></TagBox>
            </div>
        )
    }
}

export default Info;