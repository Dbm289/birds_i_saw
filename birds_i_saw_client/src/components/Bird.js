import React from "react"
import '../Stylesheet.css'



const Bird = ({bird, deleteBirdAction, toggleFavAction}) => {

    return (
            <ul className="bird"><h4>{bird.name} </h4><br /> {bird.last_seen_on} <br /> {bird.location_seen} <br />
                Number of times seen: {bird.times_seen} <br />
                Quality of sighting: {bird.quality_of_sightings} <br />
                Favorite? {bird.favorite ? 'yes' : 'no'} 
                    <input type='checkbox' onChange={(e) => toggleFavAction(e, bird)} name="favorite" defaultChecked={bird.favorite}></input> <br />
                    <input type='button' onClick={(e) => deleteBirdAction(e, bird)} name="delete" value="Delete Bird"></input>
            </ul>
    )
}

export default Bird;