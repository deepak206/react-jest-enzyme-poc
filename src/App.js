import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <Fragment><Link to="http://www.instagram.com">Instagram</Link><Header/> </Fragment>
           
    )
  }
}

export default App;