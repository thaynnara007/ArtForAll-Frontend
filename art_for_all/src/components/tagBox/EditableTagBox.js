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

    renderButtons(empty){

        if(!empty){ 
            return (
            <div>
                <button className="btn btn-info button newButton" onClick={() => this.openNameFild()}>New</button>
                <button className="btn btn-danger button editableTagBox-button" onClick={this.props.deleteTag}>Delete</button>
            </div>
            )
        }else{
            return <button className="btn btn-info button newButton" style={{margin: ' 0 0 0 17em'}} onClick={() => this.openNameFild()}>New</button>
        }
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
                    {this.renderButtons(this.props.empty)}
                </div>
                <NameFild buttonName='Add' placeHolder="Tags name" onClick={this.props.addTag} 
                open={this.state.open} handleChange={this.props.handleChange} data="tag" use={true}></NameFild>
                <section className="flex-wrap">
                    <div>{this.renderTags(this.props.tagsName)}</div>
                </section>
            </div>
        )
    }
}

export default EditableTagBox;