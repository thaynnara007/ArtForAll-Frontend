import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailsArtPage from './components/detailsPage/DetailsArtPage';
import Navbar from './components/navbar/Navbar';
import TagBox from './components/tagBox/TagBox';
import * as serviceWorker from './serviceWorker';
import ETagBox from './components/tagBox/EditableTagBox';
import InputFild from './components/forms/input/InputFild';
import EditableInfoArt from './components/info/EditableInfoArt';

ReactDOM.render(<EditableInfoArt/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
