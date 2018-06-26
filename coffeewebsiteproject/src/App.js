import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import ContactForm from './components/form';
import AboutUs from './components/aboutUs';
import Order from './components/order';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        };
    }

    handleButtonClick (event){
      console.log(event)
      this.setState({ currentPage : event });
    }

    render() {
        return (
            <div className="App">
                <div className="Top">
                    <p>
                        <i class="fas fa-map-marker-alt" /> Unit 18, Arndale
                        Center, M2 7EA
                    </p>
                    <p>
                        <i class="far fa-clock" /> Mon – Fri 7 AM – 8 PM, Sat
                        -Sun 9 AM - 6 PM
                    </p>
                    <p>
                        <i class="fas fa-phone" /> 0161-214-564
                    </p>
                    <p>
                        Social Media: &nbsp; &nbsp;{' '}
                        <i class="fab fa-facebook-square" />&nbsp;
                        <i class="fab fa-twitter-square" />&nbsp;
                        <i class="fab fa-linkedin" />&nbsp;
                        <i class="fab fa-instagram" />&nbsp;
                    </p>
                </div>
                <header className="App-header">
                    <div className="App-header1">
                        <h1>Black Bean Coffee House</h1>
                    </div>
                    <div className="App-nav">
                        <p>
                            <button type="button" onClick={() => this.handleButtonClick("home")} className="Buttonz">
                                Home
                            </button>
                        </p>
                        <p>
                            <button type="button" onClick={() => this.handleButtonClick("about")} className="Buttonz">
                                About Us
                            </button>
                        </p>
                        <i className="fa fa-coffee" aria-hidden="false" />
                        <p>
                            <button onClick={() => this.handleButtonClick("order")} type="button" className="Buttonz">
                                Order
                            </button>
                        </p>
                        <p>
                            <button onClick={() => this.handleButtonClick("contact")} type="button" className="Buttonz">
                                Contact Us
                            </button>
                        </p>
                    </div>
                </header>

                {this.state.currentPage === 'home' && <Home />}
                {this.state.currentPage === 'about' && <AboutUs />}
                {this.state.currentPage === 'order' && <Order />}
                {this.state.currentPage === 'contact' && <ContactForm />}

                <div className="Newsletter">
                    <p>
                        Sign up to our newsletter:&nbsp;&nbsp; 
                        <span className="form"> Name:&nbsp;<input type="text" value="...."/>&nbsp;&nbsp;Email Address:&nbsp;<input type="text" value="...."/>&nbsp;&nbsp;<input type="submit" /></span>
                    </p>
                    
                </div>
                <div className="Footer">
                    
                    <i className="fab fa-java"></i>

                    <div className="Text">
                        Copyright Black Bean Coffee House © 2018 | Design and
                        Development by Mike & Wayne.
                    </div>
                    <div className="icons">
                        <i class="fab fa-facebook-square" />&nbsp;
                        <i class="fab fa-twitter-square" />&nbsp;
                        <i class="fab fa-linkedin" />&nbsp;
                        <i class="fab fa-instagram" />&nbsp;
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
