import React, { Component } from 'react';


import '../Stylesheet.css'

class Name extends Component {
    state = {
        name: '',
        chosenName: ''
    }

    handleNameChange = e => {
        const { value } = e.target

        this.setState({
            name: value
        })
    }

    handleNameSubmit = e => {
        e.preventDefault()
        this.setState({
            chosenName: (this.state.name)
        })

    }

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


            </div>
        )
    }

}

export default Name;