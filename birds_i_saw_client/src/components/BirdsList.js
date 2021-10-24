import React from "react";
import { connect } from 'react-redux'

const BirdsList = () => {
    return (
        <div>
            {birds.map(bird => <ul><li>(bird.name} - {bird. </li></ul>)

        </div>
    );
};

const mapStateToProps = state => {
    return { birds: state.birds}
}

export default connect(mapStateToProps)(BirdsList;