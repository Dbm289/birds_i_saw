import React, { Component } from 'react';


import '../Stylesheet.css'

class Name extends Component {

    constructor() {
        super();
        this.input = React.createRef();
        this.handleNameSubmit = this.handleNameSubmit.bind(this);


    }

    state = {
        chosenName: '',
        nameError: ''
    }

    validate = () => {
        let nameError = "";

        if (this.input.current.value.includes("BadName")) {
            nameError = 'Your name is a naughty name and, thus, invalid';
        }

        if (nameError) {
            this.setState({ nameError });
            return false;
        }

        return true
    }

    handleNameSubmit(e) {
        console.log(this.input)
        e.preventDefault()
        alert('You submitted a name: ' + this.input.current.value);
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                chosenName: this.input.current.value
            })
        }
    };

    render() {
        return (
            <div>

<form className="nameForm" onSubmit={this.handleNameSubmit}>
            <label>Name: </label>

            <input defaultValue='Ash' type='text'  ref={this.input}/>

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