import React from 'react';
import  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tag from '../tag/Tag';
import './TagBox.css';
import NameFild from '../forms/nameFild/NameFild';

class TagBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            tagsName: [],
            open: false
        }
        this.addTag = this.addTag.bind(this);
    }

    renderTags(){ 

        var tags = this.state.tagsName.map((name, num) =>{
            return ( <Tag key={num} tagName={name}></Tag>)
        })
        return (tags);
    }

    addTag(tagName){

        var tags = this.state.tagsName.concat(tagName);
        this.setState({
            tagsName: tags
        })
    }
    
    openNameFild(){
        var tags = this.state.tagsName;
        var open = !(this.state.open);

        this.setState({
            tagsName: tags,
            open: open
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">Tags
                    <button className="btn btn-info button" onClick={() => this.openNameFild()}>New</button>
                </div>
                <NameFild onClick={this.addTag} open={this.state.open}></NameFild>
                <section className="flex-wrap">
                    <div>{this.renderTags()}</div>
                </section>
            </div>
        )
    }
}

export default TagBox;