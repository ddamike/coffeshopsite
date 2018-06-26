import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="Welcome">
                <h1 className="App-intro">
                    <hr className="style2" /> Welcome to Black Bean Coffee
                    House. <hr className="style2" />
                </h1>
                <p className="indent">
                    The Coffee Shop offers a range of high quality hand crafted
                    coffees, refreshing smoothies, homemade cakes, homely soups,
                    luxury teas and toasties made fresh in store daily – all
                    served with a heavy focus on customer service from our team
                    of friendly baristas!
                </p>
                <br />
                <p className="indent">
                    We’re a coffee roasting company with a big heart for the
                    farmers in Africa who grow our wonderful 100% Arabica
                    coffee.  We carefully roast our beans by hand in small
                    batches; the idea is you experience the taste of coffee as
                    it should be; at its freshest. Perhaps more importantly, we
                    believe the farmers (those guys right at the start of the
                    supply chain) who grow our 100% Arabica coffee should get
                    more than just a fair wage for what they do.
                </p>
                <br />
                <br />
                <img
                    src="http://www.betterbuzzvt.coffee/wp-content/uploads/2014/02/coffeecream_menu_1.jpg"
                    className="image"
                />
                <br />
                <br />
                <h1 className="App-intro">Testimonials</h1>
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
        );
    }
}
export default Home;
