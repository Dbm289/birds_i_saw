import React from "react"


const Bird = ({bird, deleteBirdAction, toggleFavAction}) => {

    return (
            <li>{bird.name} - {bird.last_seen_on} - {bird.location_seen} 
                    - Number of times seen: {bird.times_seen} 
                    - Quality of sighting: {bird.quality_of_sightings} 
                    - Favorite? {bird.favorite ? 'yes' : 'no'} 
                    <input type='checkbox' onChange={(e) => toggleFavAction(e, bird)} name="favorite" defaultChecked={bird.favorite}></input>
                    <input type='button' onClick={(e) => deleteBirdAction(e, bird)} name="delete" value="Delete Bird"></input> 
            </li>
    )
}

export default Bird;