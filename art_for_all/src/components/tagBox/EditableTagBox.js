import React from 'react';
import  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tag from '../tag/Tag';
import './EditableTagBox.css';
import NameFild from '../forms/nameFild/NameFild';

class EditableTagBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    renderTags(tagsName){ 
        
        var tags = tagsName.map((name, num) =>{
            return ( <Tag key={num} tagName={name}></Tag>)
        })
        return (tags);
    }
    
    openNameFild(){
        var open = !(this.state.open);

        this.setState({
            open: open
        })
    }

    render(){
        return(
            <div className="container white">
                <div className="row">Tags
                    <button className="btn btn-info button" onClick={() => this.openNameFild()}>New</button>
                </div>
                <NameFild buttonName='Add' placeHolder="Tags name" onClick={this.props.addTag} open={this.state.open}></NameFild>
                <section className="flex-wrap">
                    <div>{this.renderTags(this.props.tagsName)}</div>
                </section>
            </div>
        )
    }
}

export default EditableTagBox;