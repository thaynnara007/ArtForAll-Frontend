import React from 'react';
import Navbar from '../navbar/Navbar';

class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div className="font container singUpForm-size singUpForm-color">
                    <div className="singUpForm-header">
                        <p className="singUpForm-font">About</p>
                    </div>
                    <div className="singUpForm-space">
                        <p className="singUpForm-label">Bazart is a site that has as a goal the disclosure of art. 
                        The main user are the ones who are just a indie artist, or just a 
                        person who likes to dranwing and wanna make some money on your free time, or one 
                        person who wanna buy some art about your favorite movie, serie, and stuff like that, 
                        but do not want to buy it from a store for expensive prices. So, this application wanna 
                        make easy to a person find someone to make a art for you or someone who alredy have the 
                        art done.</p>
                        <br></br>
                    </div>  
                </div>
            </div>
        )
    }
}

export default AboutPage;