import React, { Component } from 'react';


import '../Stylesheet.css'

class Name extends Component {

    state = {
        name: 'Ash',
        chosenName: '',
        nameError: ''
    }

    handleNameChange = e => {
        const { value } = e.target

        this.setState({
            name: value
        })
    }

    validate = () => {
        let nameError = "";

        if (this.state.name.includes("BadName")) {
            nameError = 'Your name is a naughty name and, thus, invalid';
        }

        if (nameError) {
            this.setState({ nameError });
            return false;
        }

        return true
    }

    handleNameSubmit = e => {
        e.preventDefault()
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                chosenName: this.state.name
            })
        }
    };

    render() {
        return (
            <div>

<form className="nameForm" onSubmit={this.handleNameSubmit}>
            <label>Name: </label>

            <input type='text' value={this.state.name} onChange={this.handleNameChange} name="name" />

            < br />

            <input type='submit' value="Select this name" />

            < br />

        </form>

        <div>

            <ul className="nameFeedback">
            < br />
            <h4>
                Name Chosen:
            </h4>
            {this.state.chosenName}

            </ul>
            
        </div>
        <div style={{ color: "red" }}>
            {this.state.nameError}
        </div>


            </div>
        )
    }

}

export default Name;