import React from "react";
import NameFild from '../forms/nameFild/NameFild';
import { Link } from 'react-router-dom';
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
                    <li className="left"><Link to="/user/me/profile" className="item decoration">{this.props.userName}</Link></li>
                    <li className="left"><a className="item decoration" href="#">For you</a></li>
                    <li className="left"><a className="item decoration" href="#">Logout</a></li>
                </ul>
            )
        }else{
            return(
                <ul className="list">
                    <li className="left"><Link to="/login" className="item decoration">Login</Link></li>
                    <li className="left"><Link to="/signUp" className="item decoration">SignUp</Link></li>
                    <li className="left"><Link to="/about" className="item decoration">About</Link></li>
                </ul>
            )
        }
    }

    render(){
        return(
            <nav className="font">
                <div className="box">
                    <Link to="/" className="decoration active logo left">Bazart</Link>
                    <div className="rigth">
                        <NameFild buttonName='Search' placeHolder="Search" open={true}></NameFild>
                    </div>
                    {this.renderItens()}
                </div>
            </nav>
        )
    }
}

export default Navbar;