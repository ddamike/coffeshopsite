import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment : ""
        }
    }

    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);
                    this.setState({ payment: "Successful, order on its way" });
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }		
        
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            this.setState({ payment: "YOU CANCELLED PAYMENT - PLEASE TRY AGAIN" });
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }	
        
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear			
        }		

        let toRender = [];
        let Total = 0;
        if (this.props.order.length === 0) {
            toRender.push('Nothing in checkout');
        } else {
            this.props.order.forEach(order => {
                Total += order[1];
                toRender.push(
                    <div className="checkout-items" >
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
                <div className="checkout-items" >
                    <div>Total</div>
                    <div>
                        {`£ ${Math.floor(Total / 100)}.${Total.toString().slice(
                            -2
                        )} `}
                    </div>
                </div>
            );
        }

        const client = {
            sandbox:    'Ab26IeI9dZMato0LpuR7aSp-C72124IGJNmtmL4deTGXiMT608QWM0OuW7QhgY_CsEm69ZVWdvDloTD_',
            production: 'YOUR-PRODUCTION-APP-ID',
        }   
        
        return (
            <div className="checkout">
                <h2>Order</h2>
                <div>{toRender}</div>
                <h2>Total</h2>
                <div>{this.state.payment}</div>
                {Total !== 0 && <PaypalExpressBtn env={"sandbox"} client={client} currency={'GBP'} total={Total/100} onError={onError} onSuccess={onSuccess} onCancel={onCancel}/>}
            </div>
        );
    }
}
export default Checkout;
