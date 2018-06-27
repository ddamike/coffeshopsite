import React from 'react';

class ItemSelect extends React.Component {
    render() {
        const activeItem = {

            backgroundColor: '#e5aa4a'
        };

        const itemSelectStyle = {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid black',
            height: '200px',
        };

        let chooseItemStyle = type => {
            if (type === this.props.value) {
                return activeItem;
            } 
        };

        //for displaying menu items
        let keys = Object.keys(this.props.productArray);
        let menuOptions = [];

        keys.forEach(key => {
            menuOptions.push(
                <div
                    className="menu-options"
                    key={key}
                    style={chooseItemStyle(key)}
                    onClick={() => this.props.onClick(key)}
                >
                    {key.toUpperCase()}
                </div>
            );
        });

        return (
            <div className="itemSelect">
                {menuOptions}
                </div>
        );
    }
}

export default ItemSelect;
