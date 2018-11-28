import React from "react";
import NameFild from '../forms/nameFild/NameFild';
import './Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="font">
                <div className="box">
                <a className="decoration active logo left" href="#">Bazart</a>
                <div className="rigth">
                    <NameFild buttonName='Search' placeHolder="Search" open={true}></NameFild>
                </div>
                <ul className="list">
                    <li className="left"><a className="item decoration" href="#">Login</a></li>
                    <li className="left"><a className="item decoration" href="#">SignUp</a></li>
                    <li className="left"><a className="item decoration" href="#">About</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;