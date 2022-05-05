import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Movies from './components/Movies';
import Slider from './components/Slide';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <Router>
         <Header />
        <Routes>
          <Route path="/Todos" element={<Movies/>}/>
          <Route path="/" element={<><Main/><Slider/></>}/>
        </Routes>
  
           
      </Router>
    )
  }
}

export default Home;