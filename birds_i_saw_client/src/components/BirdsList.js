import React from "react";
import { connect } from 'react-redux'
import { deleteBird, editBird } from "../actions/birdsActions";

const BirdsList = ( { birds, editBird, deleteBird }) => {

    const toggleFavAction = (e, bird) => {
        console.log(e.target.checked)
        const {checked} = e.target
        editBird({
            ...bird,
            favorite: checked
        })
        //this.setState({
        //    [name]: value == 
       // })
    }

    const deleteBirdAction = (e, bird) => {
        e.preventDefault()
        deleteBird(
            bird.id)

    }

    return (
        <div>
        <ul>
            {birds.map(bird => 
                
                    <li key={bird.id}>{bird.name} - {bird.last_seen_on} - {bird.location_seen} 
                    - Number of times seen: {bird.times_seen} 
                    - Quality of sighting: {bird.quality_of_sightings} 
                    - Favorite? {bird.favorite ? 'yes' : 'no'} 
                    <input type='checkbox' onChange={(e) => toggleFavAction(e, bird)} name="favorite" defaultChecked={bird.favorite}></input>
                    <input type='button' onClick={(e) => deleteBirdAction(e, bird)} name="delete" value="Delete Bird"></input> 
                    </li>
                
            )}
            </ul> 
        </div>
    //make toggle for favorites here too
    );
};

const mapStateToProps = state => {
    return { birds: state.birds}
}



export default connect(mapStateToProps, { editBird, deleteBird })(BirdsList);