import React from 'react';

class DisplayItems extends React.Component {
    render() {
        let toDisplay = [];
        let productArray = this.props.productArray;
        console.log(productArray);

        const productStyle = {
            border: '1px solid black',
            display : "flex",
            flexDirection : "column",
            width: '150px',
            margin: '20px',
            minHeight: '250px',
            height : '100%',
            alignContent : 'center',
            justifyContent : 'space-between'
        };

        const displayItemsStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            height : '100%'
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
                    <img
                        alt="picture"
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
                    <button >
                            BUY
                    </button>
                </div>
            );
        }

        return (
            <div style={displayItemsStyle} className="itemSelect">
                {toDisplay}
            </div>
        );
    }
}

export default DisplayItems;
