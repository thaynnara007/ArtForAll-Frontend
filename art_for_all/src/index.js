import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import EditableDetailsArtPage from './components/detailsPage/EditableDetailsArtPage';
import DetailsArtPage from './components/detailsPage/DetailsArtPage';
import Navbar from './components/navbar/Navbar'
import * as serviceWorker from './serviceWorker';
import SignUpPage from './components/signUpPage/SignUpPage';
import Login from './components/login/login';
import Art from './components/art/Art';
import ArtBox from './components/artBox/ArtBox';
import ProfilePicture from './components/profilePicture/ProfilePicture';
import ProfileInfo from './components/profileInfo/ProfileInfo';
import Profile from './components/profile/Profile';
import AboutPage from './components/abouPage/About';
import AboutProfile from './components/aboutProfile/AboutProfile';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}></Route>
            <Route path="/signUp" component={SignUpPage}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/user/:userName/profile" component={Profile}></Route>
            <Route path="/user/:userName/info" component={AboutProfile}></Route>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
