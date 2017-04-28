import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import axios from 'axios'

import styles from './InputSearch.css';
import ArtistNameSearchResult from '../../containers/ArtistNameSearchResult/ArtistNameSearchResult.js';






class InputSearch extends Component {
  render() {
    return (
      <div>
        <button id="getArtistName">Search an artist</button>
        <input type="text" id="inputSearch" placeholder="Search the name of your favorite artist">
        </input>
        
      </div>
    )

    
  }

  componentDidMount() {
    //definition of persisted data
    document.getElementById('getArtistName')
      .addEventListener('click', function() {
       let search = document.getElementById('inputSearch').value;
       if(search != "")
       {   
          //we persist the search value of the artist name
          localStorage.artistNameSearchValue = document.getElementById('inputSearch').value;

          //we call getArtista dispatcher
          search.replace(/ /g,"+");
          store.dispatch({ type: 'getArtista',payload: "https://api.spotify.com/v1/search?q="+search+"&type=artist" })
       }
         
      })

  }
}



function reducer(state = "?", action) {
  switch (action.type) {

  case 'getArtista':

     axios.get(action.payload)
      .then((response) => { 
        //console.log(response.data.name);
        store.dispatch({ type: 'showArtista',payload: response.data })
         
      })
     return state;


   case 'showArtista':

    //we persist our list of artists name
    localStorage.artistNameList = JSON.stringify(action.payload);
    //we render the artist list result view
    ReactDOM.render((
      <ArtistNameSearchResult />
    ), document.getElementById('root'));
    
   
   return action.payload

  
  default:
    return state
  }
}

let store = createStore(reducer)










export default InputSearch;
