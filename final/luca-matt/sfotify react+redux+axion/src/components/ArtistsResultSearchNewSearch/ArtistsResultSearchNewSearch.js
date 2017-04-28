import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import axios from 'axios'

import styles from './ArtistsResultSearchNewSearch.css';


class ArtistsResultSearchNewSearch extends Component {
  render() {
    return (
      <div>
        <button id="getArtistName">Search an artist</button>
        <input type="text" id="inputSearch" placeholder="Search the name of your favorite artist">
        </input>
      </div>


    )
  }

 
}






export default ArtistsResultSearchNewSearch;
