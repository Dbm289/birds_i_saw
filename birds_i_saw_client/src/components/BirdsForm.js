import React, { Component } from 'react';

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

    render() {
        return (
            <form>

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

            <input type='number' value={this.state.favorite} onChange={this.handleChange} name="favorite"/>

            < br />

            <input type='submit' value="Add Bird" />

            </form>
        );
    }
}

export default BirdsForm;