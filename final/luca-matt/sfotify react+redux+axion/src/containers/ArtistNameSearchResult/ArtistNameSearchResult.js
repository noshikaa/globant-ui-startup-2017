import React, { Component } from 'react';
import {createStore} from 'redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import './ArtistNameSearchResult.css';
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import ArtistsResultSearch from '../../components/ArtistsResultSearch/ArtistsResultSearch';
import ArtistsResultSearchNewSearch from '../../components/ArtistsResultSearchNewSearch/ArtistsResultSearchNewSearch'
import ArtistsResultLinks from '../../components/ArtistsResultLinks/ArtistsResultLinks';
import ArtistsResultList from '../../components/ArtistsResultList/ArtistsResultList';

class ArtistNameSearchResult extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title texts="Sfotify" styleName="text-color-white" />
        <ArtistsResultSearch />
        <ArtistsResultSearchNewSearch />
        <ArtistsResultLinks />
        <ArtistsResultList />
      </div>
    );
  }
}

export default ArtistNameSearchResult;
