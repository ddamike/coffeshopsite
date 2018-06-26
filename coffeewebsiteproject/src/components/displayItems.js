import React from 'react';

class DisplayItems extends React.Component {
    render() {
        let toDisplay = [];
        let productArray = this.props.productArray;
        console.log(productArray);



        let selectedProducts = productArray[this.props.value];
        for (var product in selectedProducts) {
            let price = selectedProducts[product].price;
            let productDetails = [selectedProducts[product].name, price]
            toDisplay.push(
                <div
                    className="product"
                    key={selectedProducts[product].name}
                >
                    <img
                        alt={selectedProducts[product].name}
                        width="100%"
                        src={selectedProducts[product].img}
                    />
                    <div style={{ height: '20%' }}>
                        {selectedProducts[product].name}{' '}
                    </div>

                    <div>
                        {`£ ${Math.floor(price / 100)}.${price
                            .toString()
                            .slice(-2)} `}{' '}
                    </div>
                    <button onClick={() => this.props.onClick(productDetails)}>
                            BUY
                    </button>
                </div>
            );
        }

        return (
            <div className="flex-center">
                <div className="displayItems">
                    {toDisplay}
                </div>
            </div>
        );
    }
}

export default DisplayItems;
