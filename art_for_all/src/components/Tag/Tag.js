import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Tag.css';

class Tag extends React.Component{

    render(){
        return(
            <span className='badge badge-primary box'>{this.props.tagName}</span>
        )
    }
}

export default Tag;