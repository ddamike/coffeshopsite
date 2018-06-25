import React from "react";


class ItemSelect extends React.Component {

render () {
    return (
        <div className="itemSelect">
            <div onClick={() => this.props.onClick("coffees")}> COFFEE </div>
            <div onClick={() => this.props.onClick("teas")}> TEA </div>
            <div onClick={() => this.props.onClick("juices")}> JUICES </div>
            <div onClick={() => this.props.onClick("breakfasts")}> BREAKFAST </div>
        </div>
    ) 
}
}

export default ItemSelect;