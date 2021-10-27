import React, { Component } from "react";
import { connect } from 'react-redux' 

import { fetchBirds } from '../actions/birdsActions'
import BirdsList from './BirdsList'
import BirdsForm from "./BirdsForm";
import Navbar from "./Navbar"

class BirdsContainer extends Component {

    componentDidMount() {
        this.props.fetchBirds()
    }
    render() {
        return (
            <div>


            <BirdsForm />

            </div>
        );
    }
}

export default connect(null, {fetchBirds })(BirdsContainer);