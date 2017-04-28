import React, { Component } from 'react';
import {createStore} from 'redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Header from '../../components/Header/Header';
import InputSearch from '../../components/InputSearch/InputSearch';
import FavoriteSongBox from '../../components/FavoriteSongBox/FavoriteSongBox';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title texts="Sfotify" styleName="text-color-white" />
        <Subtitle />
        <InputSearch />
       
        
      </div>
    );
  }
}

export default Home;
