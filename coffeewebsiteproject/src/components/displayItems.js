import React from 'react';

class DisplayItems extends React.Component {
    render() {
        let toDisplay = [];
        let productArray = this.props.productArray
        console.log(productArray)

        const productStyle = {
            border: '1px solid black',
            width: '100px'
        };

        let selectedProducts = productArray[this.props.value];
        for (var product in selectedProducts) {
            let price = selectedProducts[product].price;
            toDisplay.push(
                <div
                    style={productStyle}
                    className="product"
                    key={selectedProducts[product].name}
                >
                    <div>{selectedProducts[product].name} </div>
                    <img alt="picture" width="100%" src={selectedProducts[product].img} />
                    <div>
                        {`£ ${Math.floor(price / 100)}.${price
                            .toString()
                            .slice(-2)} `}{' '}
                    </div>
                </div>
            );
        }

        return <div className="itemSelect">{toDisplay}</div>;
    }
}

export default DisplayItems;
