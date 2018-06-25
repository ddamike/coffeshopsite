import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/form'
import AboutUs from './components/aboutUs'
import Order from './components/order'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ContactForm />
        <AboutUs />
        <Order />

      </div>
    );
  }
}

export default App;