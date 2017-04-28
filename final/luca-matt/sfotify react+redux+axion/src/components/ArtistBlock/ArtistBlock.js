import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import styles from './ArtistBlock.css';



class ArtistBlock extends Component {
  render() {
    return (
      <div id="block">
        <p id="name"></p>
      </div>
   
    )
  }

   componentDidMount() {
        
        document.getElementById('name').innerHTML = localStorage.artistBlockName;
  }
  

}

export default ArtistBlock;
