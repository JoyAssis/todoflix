import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Movies from './components/Movies';
import Slider from './components/Slide';

class Home extends Component {
  render() {
    return (
      <div>
  
        <Header />
        <Main />
        <Slider />
      </div>
    )
  }
}

export default Home;