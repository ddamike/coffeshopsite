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
                <h1 className="App-intro"><hr className="style2" />Testimonials<hr className="style2" /></h1>
                
                <div className="Tables">
                    <div className="sq"><br /><br />Lovely Classy Place To Go For A Coffee & A Bite To Eat In Manchester. Great Customer Service & The Food Is Amazing. I Had A Home Made – Mediterranean Chicken Sourdough – Made By George. Was Absolutely Beautiful. First Time I Have Ever Been. Safe To Say I Will Be Returning!
                    <br />
                    <br />
                    <br />
                   <p className="name"> Peter &nbsp;<i className="fas fa-user"></i></p></div>
                    <div className="sq"><br /><br />First time here. Really friendly owners. Very attentive service. Great touch to offer customers a little sample cup of soup to try. Another reason why you should visit independent shops.
                    <br />
                    <br />
                    <br />
                    <p className="name">Ishmal &nbsp;<i className="fas fa-user"></i></p></div>
                    <div className="sq"><br /><br />The best coffee in Manchester! Super friendly, clean & trendy coffee shop. Will visit again!
                    <br />
                    <br />
                    <br />
                    James &nbsp;<i className="fas fa-user"></i></div>
                </div>
                <div className="Tables">
                    <div className="sq"><br /><br />Very friendly staff and delicious food. I usually go for a soup of the day. Home made soup is always fresh and tasty. I would highly recommend this coffee shop, they are always good with my little girl too! <br />
                    <br />
                    <br />Imran &nbsp;<i className="fas fa-user"></i></div>
                    <div className="sq"><br /><br />Whenever I am in Manchester I stop in this excellent local coffee shop/cafe for something basic and traditional before I walk the old railway line down to Salford or the old canal to Bolton. If you want egg and chips like your mum made them fifty years ago, with a mug of tea, this is a real treat, and very reasonably priced. There is a specials board, and everything hot is cooked on demand. I love it.
                    <br />
                    <br />
                    <br />Victor &nbsp;<i className="fas fa-user"></i></div>
                    <div className="sq"><br /><br />Not too bad, as a coffee connoisseur i have been to better however the staff seem pleasant and are on hand to help.
                    <br />
                    <br />
                    <br />Eden &nbsp;<i className="fas fa-user"></i></div>
                    <br />
                </div>
            </div>
        );
    }
}
export default Home;
