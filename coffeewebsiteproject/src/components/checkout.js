import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let toRender = [];
        let Total = 0;
        if (this.props.order.length === 0) {
            toRender.push('Nothing in checkout');
        } else {
            this.props.order.forEach(order => {
                Total += order[1];
                toRender.push(
                    <div>
                        <div>{order[0]}</div>
                        <div>
                            {`£ ${Math.floor(
                                order[1] / 100
                            )}.${order[1].toString().slice(-2)} `}
                        </div>
                    </div>
                );
            });
            toRender.push(
                <div>
                    <div>Total</div>
                    <div>
                        {`£ ${Math.floor(Total / 100)}.${Total.toString().slice(
                            -2
                        )} `}
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h2>Order</h2>
                <div>{toRender}</div>
                <h2>Total</h2>
            </div>
        );
    }
}
export default Checkout;
