import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EditableDetailsArtPage from './components/detailsPage/EditableDetailsArtPage';
import Navbar from './components/navbar/Navbar'
import SingUpForm from './components/forms/singUp/singUpForm';
import * as serviceWorker from './serviceWorker';
import SingUpPage from './components/singUpPage/SingUpPage';


ReactDOM.render(<SingUpPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
