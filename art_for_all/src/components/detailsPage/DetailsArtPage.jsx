import React from 'react';
import InfoArt from '../info/InfoArt';
import Api from '../Api';
import {ToastContainer, ToastStore} from 'react-toasts';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './DetailsArtPage.css';

class DetailsArtPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            artName:'',
            author: '',
            collection: '',
            description: '',
            contact: '',
            tagsName: [],
            file: this.props.image
        }
    }

    componentDidMount(){
       
        var path = "user/" + (this.props.profileOwner) + "/profile/myArts/" + (this.props.artName);
        Api.get(path, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then((response) =>{
            var data = response.data[0];
           
            this.setState({
                artName: data.name,
                author: data.author,
                collection: data.collectioon,
                description: data.description,
                contact: data.contact,
                tagsName: data.tags
            })
    
        }).catch((error) =>{
            console.log(error);
            ToastStore.error(error.message);
        }) 
     }

    render(){

        if (this.props.open){
            return(
                <div className='modal'>
                    <div className="container max style">
                            <button className="close" onClick={this.props.hideModal}>x</button>
                            <div className="flex">
                                <img className="img-size" src={this.state.file} alt={this.state.artName}></img>
                                <section className="info">
                                    <InfoArt 
                                    info={[this.state.artName, this.state.author, this.state.collection, this.state.description, this.state.contact]} 
                                    tagsName={this.state.tagsName}></InfoArt>
                                </section>
                            </div>
                        </div>
                        <ToastContainer store={ToastStore}></ToastContainer>
                </div>
            )
        }
        else return null;
    }
}

export default DetailsArtPage;