import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            telephone : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Telephone:
                    <input
                        type="text"
                        value={this.state.telephone}
                        onChange={this.handleInputChange}
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ContactForm;
