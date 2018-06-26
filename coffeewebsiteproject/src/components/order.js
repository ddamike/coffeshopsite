import React from 'react';
import ItemSelect from './itemSelect';
import DisplayItems from './displayItems';
import Checkout from './checkout';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.chooseItem = this.chooseItem.bind(this);
        this.buyItem = this.buyItem.bind(this);
        let imgPath = 'orderImages/';
        this.state = {
            itemType: 'coffees',
            productArray: {
                coffees: {
                    coffee1: {
                        name: 'Americano 12oz',
                        price: 195,
                        img: `${imgPath}americano.jpg`
                    },
                    coffee2: {
                        name: 'Americano 16oz',
                        price: 225,
                        img: `${imgPath}americano.jpg`
                    },
                    coffee3: {
                        name: 'Cappucino',
                        price: 235,
                        img: `${imgPath}cappucino.jpg`
                    }
                },
                teas: {
                    tea1: {
                        name: 'English Breakfast 12oz',
                        price: 165,
                        img: `${imgPath}tea.jpg`
                    },
                    tea2: {
                        name: 'English Breakfast 16oz',
                        price: 140,
                        img: `${imgPath}tea.jpg`
                    },
                    tea3: {
                        name: 'Earl Grey',
                        price: 160,
                        img: `${imgPath}tea.jpg`
                    }
                },
                juices: {
                    juice1: {
                        name: 'Orange Juice 12oz',
                        price: 300,
                        img: `${imgPath}oj.jpg`
                    }
                },
                breakfasts: {
                    breakfast1: {
                        name: 'Avocado on Toast',
                        price: 300,
                        img: `${imgPath}avacdo.jpg`
                    },
                    breakfast2: {
                        name: 'Tea Cake',
                        price: 175,
                        img: `${imgPath}teacake.png`
                    },
                    breakfast3: {
                        name: 'Bacon, Sausage & Egg',
                        price: 280,
                        img: `${imgPath}bse.jpg`
                    },
                    breakfast4: {
                        name: 'Bacon Roll',
                        price: 230,
                        img: `${imgPath}bacon.jpg`
                    }
                }
            },
            order: []
        };
    }

    chooseItem = event => {
        console.log(event);
        this.setState({ itemType: event });
    };

    buyItem = item => {
        this.setState(prevState => ({
            order: [...prevState.order, item]
        }));
        console.log(item);
    };

    render() {
        const menuStyle = {
            display: 'flex'
        };

        return (
            <div className="menu" style={menuStyle}>
                <ItemSelect
                    className="category"
                    value={this.state.itemType}
                    productArray={this.state.productArray}
                    onClick={this.chooseItem}
                />
                <DisplayItems
                    className="items"
                    productArray={this.state.productArray}
                    value={this.state.itemType}
                    onClick={this.buyItem}
                />
                <Checkout className="checkout" order={this.state.order} />
            </div>
        );
    }
}

export default Order;
