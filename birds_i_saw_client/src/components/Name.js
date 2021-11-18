import React, { Component } from 'react';


import '../Stylesheet.css'

class Name extends Component {
    state = {
        name: ''
    }

    handleCharChange = e => {
        const { value } = e.target

        this.setState({
            name: value
        })
    }

    render() {
        return (
            <div>

<form className="characterForm" onSubmit={this.handleCharSubmit}>
            <label>Name: </label>

            <input type='text' value={this.state.name} onChange={this.handleCharChange} name="name" />

            < br />

            <input type='submit' value="Select this name" />

            < br />

        </form>

            </div>
        )
    }

}

export default Name;