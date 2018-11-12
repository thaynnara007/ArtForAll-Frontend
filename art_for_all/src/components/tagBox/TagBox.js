import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tag from '../tag/Tag';
import './TagBox.css';

class TagBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            tagsName: ["eita", "mds", "ficou", "uma", "merda", "ssssss", "jjjjj", "aaaaaaaaaaaaaaa"]
        }
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

    render(){
        return(
            <div>
                <div className="container row">Tags
                    <button className="btn btn-info button" onClick={ () => this.addTag('newTAG')}>New</button>
                </div>
                <section className="container flex-wrap">
                <div>{this.renderTags()}</div>
                </section>
            </div>
        )
    }
}

export default TagBox;