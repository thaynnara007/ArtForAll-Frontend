import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tag from '../tag/Tag';
import './TagBox.css';
import NameFild from '../forms/nameFild/NameFild';

class TagBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            tagsName: ["eita", "mds", "ficou", "uma", "merda", "ssssss", "jjjjj", "aaaaaaaaaaaaaaa"]
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

    handleChange(event){
        this.setState({
            inputData: event.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">Tags
                    <button className="btn btn-info button" onClick={ () => this.addTag('newTAG')}>New</button>
                </div>
                <button className="btn btn-outline-success" onClick={() => this.addTag('CUU')}>Add</button>
                <NameFild onClick={this.addTag} handleChange={this.handleChange}></NameFild>
                <section className="flex-wrap">
                <div>{this.renderTags()}</div>
                </section>
            </div>
        )
    }
}

export default TagBox;