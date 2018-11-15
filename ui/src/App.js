import React, { Component } from 'react';
import HomePage from './containers/HomePage';
import Header from './containers/Header';
import Footer from './containers/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
