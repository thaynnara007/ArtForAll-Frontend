import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EditableDetailsArtPage from './components/detailsPage/EditableDetailsArtPage';
import Navbar from './components/navbar/Navbar'
import SignUpForm from './components/forms/signUp/signUpForm';
import * as serviceWorker from './serviceWorker';
import SignUpPage from './components/signUpPage/SignUpPage';


ReactDOM.render(<SignUpPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
