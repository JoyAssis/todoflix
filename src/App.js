import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Movies from './components/Movies';

class Home extends Component {
  render() {
    return (
      <div>
  
        <Header />
        <Main />
        <Movies />
      </div>
    )
  }
}

export default Home;