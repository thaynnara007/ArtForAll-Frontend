import React from 'react';

class Text extends React.Component{
    render(){
        return(
            <div className="form-group">
                <textarea className="form-control" placeholder={this.props.placeHolder} onChange={(event, data) => this.props.handleChange(event, this.props.data)}></textarea>
            </div>
        )
    }
}

export default Text;