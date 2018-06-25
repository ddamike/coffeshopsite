import React from "react";
import ItemSelect from "./itemSelect"
import DisplayItems from "./displayItems"

class Order extends React.Component {
    constructor(props) {
        super(props)
        this.chooseItem = this.chooseItem.bind(this)
        this.state = {
            itemType : "coffees"
        }
    }

chooseItem = (event) => {
    console.log(event)
    this.setState({ itemType : event });


}

render () {
    return (
        <div>
            <ItemSelect onClick={this.chooseItem}/>
            <DisplayItems value={this.state.itemType}/>
        </div>
    ) 
}
}

export default Order;