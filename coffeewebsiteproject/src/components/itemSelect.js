import React from 'react';

class ItemSelect extends React.Component {
    render() {
        const itemStyle = {
            border: '1px solid black',
            height: '50px',
            width: '150px'
        };

        const activeItem = {
            border: '1px solid black',
            height: '50px',
            width: '150px',
            backgroundColor: 'yellow'
        };

        const itemSelectStyle = {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid black',
            height: '200px',
            width: '150px'
        };

        let chooseItemStyle = type => {
            if (type === this.props.value) {
                return activeItem;
            } else {
                return itemStyle;
            }
        };

        //for displaying menu items
        let keys = Object.keys(this.props.productArray);
        let menuOptions = [];

        keys.forEach(key => {
            menuOptions.push(
                <div
                    key={key}
                    style={chooseItemStyle(key)}
                    onClick={() => this.props.onClick(key)}
                >
                    {key.toUpperCase()}
                </div>
            );
        });

        return (
            <div style={itemSelectStyle} className="itemSelect">
                {menuOptions}
                </div>
        );
    }
}

export default ItemSelect;
