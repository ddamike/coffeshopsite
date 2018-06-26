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
        <div className="Welcome">
        
        <h1 className="App-intro">
        
        <hr className="style2" /> Welcome to Black Bean Coffee House. <hr className="style2" />
        </h1>
        <p className="indent">The Coffee Shop offers a range of high quality hand crafted coffees, refreshing smoothies, homemade cakes, homely soups, luxury teas and toasties made fresh in store daily – all served with a heavy focus on customer service from our team of friendly baristas!</p>
        <br />
        <p className="indent">We’re a coffee roasting company with a big heart for the farmers in Africa who grow our wonderful 100% Arabica coffee.  We carefully roast our beans by hand in small batches; the idea is you experience the taste of coffee as it should be; at its freshest.
Perhaps more importantly, we believe the farmers (those guys right at the start of the supply chain) who grow our 100% Arabica coffee should get more than just a fair wage for what they do.</p>
        <br />
        <br />
        <img src="http://www.betterbuzzvt.coffee/wp-content/uploads/2014/02/coffeecream_menu_1.jpg" className="image"/>
        <br />
        <br />
        <h1 className="App-intro">
         Testimonials
        </h1>
        <br />
        <div className="Tables">
        
        <div className="sq">s</div>
        <div className="sq">x</div>
        <div className="sq">c</div>
        </div>
        <div className="Tables">
        <div className="sq">f</div>
        <div className="sq">s</div>
        <div className="sq">f</div>
        <br />
          </div>

        </div>
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