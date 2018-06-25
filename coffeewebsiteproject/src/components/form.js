import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            telephone : '',
            message : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log(target.value)
        console.log(name + " " +  value )

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.name} 
               Email :  ${this.state.email} 
               Telephone : ${this.state.telephone}` );
        event.preventDefault();
    }

    render() {
        return (
            <div className="formContainer">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        name = "name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Telephone:
                    <input
                        name="telephone"
                        type="text"
                        value={this.state.telephone}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        type="text"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default ContactForm;
