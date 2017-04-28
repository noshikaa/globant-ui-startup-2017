import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'


import styles from './ArtistsResultSearch.css';

class ArtistsResultSearch extends Component {
  render() {
    return (
      <div>
        <h2> Artists </h2>
        <p id="currentSearch">You are currently searching:</p>
        
      </div>
   
    )
  }


  componentDidMount() {
    //console.log(localStorage.artistNameSearchValue);
    document.getElementById('currentSearch').innerHTML += localStorage.artistNameSearchValue;
  }
}



/*
function getCurrentSearch(){

console.log(localStorage.artistNameSearchValue);
document.getElementById('currentSearch').innerHTML = localStorage.artistNameSearchValue;

}
window.onload = function(){
getCurrentSearch();
}*/


export default ArtistsResultSearch;
