import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import axios from 'axios'

import Home from '../../containers/Home/Home';

import styles from './ArtistsResultLinks.css';


class ArtistsResultLinks extends Component {
  render() {
    return (
      <div>
         <a href="#" id="homeLink">Home</a> <span> > </span> <span><a href="#" id="artistsLink">Artists</a></span>
      </div>


    )
  }

  componentDidMount() {
    //definition of persisted data
     document.getElementById('homeLink')
      .addEventListener('click', function() {
      
      //we render the home view
      
        ReactDOM.render((
        <Home />
      
        ), document.getElementById('root'));
         
      })
  }
}






export default ArtistsResultLinks;
