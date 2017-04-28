import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import ArtistBlock from '../../components/ArtistBlock/ArtistBlock';
import ArtistNameSearchResult from '../../containers/ArtistNameSearchResult/ArtistNameSearchResult.js';

import styles from './ArtistsResultList.css';







class ArtistsResultList extends Component {
  render() {
    return (
      <div>
        <textarea id="res"></textarea>
            
        </div>
   
    )
  }





  componentDidMount() {

      //FOR EACH ARTIST NAME WE GOT
   for(let i = 0;i < JSON.parse(localStorage.artistNameList).artists.items.length ;i++){
     document.getElementById('res').value += JSON.parse(localStorage.artistNameList).artists.items[i].name + "\n";
    }

  }
}


export default ArtistsResultList;
