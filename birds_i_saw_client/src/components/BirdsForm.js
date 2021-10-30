import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBird } from '../actions/birdsActions'

import '../Stylesheet.css'

class BirdsForm extends Component {

    state = {
        name: '',
        last_seen_on: '',
        location_seen: '',
        times_seen: '',
        quality_of_sightings: '',
        favorite: '',
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    toggleFavAction = e => {
        console.log(e.target.checked)
        const {checked} = e.target
        this.setState({
            favorite: checked
        })
        //this.setState({
        //    [name]: value == 
       // })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.addBird(this.state)
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>

            <label>Name:</label>

            <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>

            < br />

            <label>Last seen on:</label>

            <input type='text' value={this.state.last_seen_on} onChange={this.handleChange} name="last_seen_on"/>

            < br />

            <label>Location seen:</label>

            <input type='text' value={this.state.location_seen} onChange={this.handleChange} name="location_seen"/>

            < br />

            <label>Times seen:</label>

            <input type='number' value={this.state.times_seen} onChange={this.handleChange} name="times_seen"/>

            < br />

            <label>Quality of Sightings:</label>

            <input type='number' value={this.state.quality_of_sightings} onChange={this.handleChange} name="quality_of_sightings"/>

            < br />

            <label>Favorite?</label>

            <input type='checkbox' onChange={this.toggleFavAction} name="favorite"></input>

            < br />

            <input type='submit' value="Add Bird" />

            </form>
        );
    }
}

export default connect(null, { addBird })(BirdsForm);