import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tag from '../tag/Tag';

class TagBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            tagsName: ["eita", "mds", "ficou", "uma", "merda"]
        }
    }

    renderTags(){ 

        var tags = this.state.tagsName.map((name) =>{

            return (<li key={name}><Tag tagsName="name"></Tag></li>)
        })
        return (tags);

    }

    render(){
        return(
            <div>
            <section className="container flex-wrap">
                <Tag tagName="masoq?"></Tag>
            </section>
            </div>
        )
    }
}

export default TagBox;