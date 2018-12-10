import React from "react";
import NameFild from '../forms/nameFild/NameFild';
import './Navbar.css';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    
        this.renderItens = this.renderItens.bind(this);
    }

    renderItens(){

        if(this.props.logado){
            return(
                <ul className="list">
                    <li className="left"><a className="item decoration" href="#">{this.props.userName}</a></li>
                    <li className="left"><a className="item decoration" href="#">For you</a></li>
                    <li className="left"><a className="item decoration" href="#">Logout</a></li>
                </ul>
            )
        }
        else{
            return(
                <ul className="list">
                    <li className="left"><a className="item decoration" href="#">Login</a></li>
                    <li className="left"><a className="item decoration" href="#">SignUp</a></li>
                    <li className="left"><a className="item decoration" href="#">About</a></li>
                </ul>
            )
        }
    }

    render(){
        return(
            <nav className="font">
                <div className="box">
                    <a className="decoration active logo left" href="#">Bazart</a>
                    <div className="rigth">
                        <NameFild buttonName='Search' placeHolder="Search" open={true}></NameFild>
                    </div>
                    {this.renderItens()}
                </div>
            </nav>
        );
    }
}

export default Navbar;