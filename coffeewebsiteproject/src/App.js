import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import ContactForm from './components/form'
import AboutUs from './components/aboutUs'
import Order from './components/order'

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className="Top">
      <p><i class="fas fa-map-marker-alt"></i>  Unit 18, Arndale Center, M2 7EA</p>       
      <p><i class="far fa-clock"></i>  Mon – Fri 7 AM – 8 PM, Sat -Sun 9 AM - 6 PM</p>
      <p><i class="fas fa-phone"></i>   0161-214-564</p>
      <p>Social Media: &nbsp; &nbsp;   <i class="fab fa-facebook-square"></i>&nbsp;  
        <i class="fab fa-twitter-square"></i>&nbsp;
        <i class="fab fa-linkedin"></i>&nbsp;
        <i class="fab fa-instagram"></i>&nbsp;</p>
      

        </div>
        <header className="App-header">
          <div className="App-header1">
            <h1>Black Bean Coffee House</h1>
          </div>
          <div className="App-nav">
            <p><button type="button" className="Buttonz">Home</button></p>
            <p><button type="button" className="Buttonz">About Us</button></p>
            <i className="fa fa-coffee" aria-hidden="false"></i>
            <p><button type="button" className="Buttonz">Order</button></p>
            <p><button type="button" className="Buttonz">Contact Us</button></p>
          </div>
        </header>

        <Order />

        <div className="Newsletter">
<p>Sign up to our newsletter: <input type="text" /></p>


        </div>
        <div className="Footer">
        
        <img src="http://via.placeholder.com/50x50" />
        
        <div className="Text">
        Copyright Black Bean Coffee House © 2018 | Design and Development by ______.
        </div>
        <div className="icons">
        <i class="fab fa-facebook-square"></i>&nbsp;
        <i class="fab fa-twitter-square"></i>&nbsp;
        <i class="fab fa-linkedin"></i>&nbsp;
        <i class="fab fa-instagram"></i>&nbsp;
          </div>
        </div>

      </div>
    );
  }
}

export default App;