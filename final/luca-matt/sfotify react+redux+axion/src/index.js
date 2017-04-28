import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';

window.onload = function(){
//definition of persisted data
localStorage.setItem("artistNameSearchValue", "");
localStorage.setItem("artistNameList", "");
localStorage.setItem("artistBlockName","");
localStorage.setItem("artistBlockImg","");
};


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
