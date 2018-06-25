import React from 'react';

class DisplayItems extends React.Component {
    render() {
        let toDisplay = [];
        const coffees = ['coffee1', 'coffee2', 'coffee3'];
        const teas = ['tea 1', 'tea 2', 'tea 3'];
        const juices = ['juice 1', 'juice 2', 'juice 3'];
        const breakfasts = ['breakfast 1', 'breakfast 2', 'breakfast 3', "breakfast 4"];

        const productArray = {
            coffees : coffees,
            teas : teas,
            juices: juices,
            breakfasts : breakfasts
        };

        productArray[this.props.value].forEach((product, index) => {
            toDisplay.push(<div key={index}> {product} </div>);
        });

        return (
            <div className="itemSelect">
                {toDisplay}
            </div>
        )
        
    }
}

export default DisplayItems;
