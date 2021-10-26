import React from "react";
import { connect } from 'react-redux'

const BirdsList = ( { birds }) => {
    return (
        <div>
            {birds.map(bird => <ul><li key={bird.id}>{bird.name} - {bird.last_seen_on} - {bird.location_seen} - Number of times seen: {bird.times_seen} - Quality of sighting: {bird.quality_of_sightings} - Favorite? {bird.favorite ? 'yes' : 'no'} </li></ul>)}
            
        </div>
    //make toggle for favorites here too
    );
};

const mapStateToProps = state => {
    return { birds: state.birds}
}

export default connect(mapStateToProps)(BirdsList);