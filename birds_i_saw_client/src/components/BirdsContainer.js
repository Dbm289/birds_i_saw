import React, { Component } from "react";
import { connect } from 'react-redux' 

import { fetchBirds } from '../actions/birdsActions'


class BirdsContainer extends Component {

    componentDidMount() {
        this.props.fetchBirds()
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default connect(null, {fetchBirds })(BirdsContainer);