import React from 'react';
import  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tag from '../tag/Tag';
import './TagBox.css';


class TagBox extends React.Component{
    renderTags(){ 

        var tags = this.props.tagsName.map((name, num) =>{
            return ( <Tag key={num} tagName={name}></Tag>)
        })
        return (tags);
    }

    render(){
        return(
            <div className="containerr whitee">
                <div className="roww">Tags</div>
                <section className="flex-wrapp">
                    <div>{this.renderTags()}</div>
                </section>
            </div>
        )
    }
}

export default TagBox;