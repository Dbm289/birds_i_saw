import React from "react";
import { connect } from 'react-redux'
import Bird from './Bird';
import { deleteBird, editBird, sawItAgain } from "../actions/birdsActions";
import BirdsForm from "./BirdsForm";
import '../Stylesheet.css'

const BirdsList = ( { birds, editBird, deleteBird, sawItAgain } ) => {

    const toggleFavAction = (e, bird) => {
        console.log(e.target.checked)
        const {checked} = e.target
        editBird({
            ...bird,
            favorite: checked
        })
    }

    const deleteBirdAction = (e, bird) => {
        deleteBird(
            bird.id)

    }

    const sawItAgainAction = (e, bird) => {
        console.log(bird)
        const seenItCount = bird.times_seen
        editBird({
            ...bird,
            times_seen: seenItCount + 1})
    }
    
    return (
        <div>
        <div>
            <BirdsForm />

            </div>
        <ul className="birdsList">
            {birds.filter((bird) => {
                return bird.favorite === true
            }

            ).map(bird => 
                
               <Bird key={bird.id} bird={bird} deleteBirdAction={deleteBirdAction} toggleFavAction={toggleFavAction} sawItAgainAction={sawItAgainAction} />     
                
            )}
            {birds.filter((bird) => {
                return bird.favorite === false
            }

            ).map(bird => 
                
               <Bird key={bird.id} bird={bird} deleteBirdAction={deleteBirdAction} toggleFavAction={toggleFavAction} sawItAgainAction={sawItAgainAction} />     
                
            )}
            </ul> 
        </div>
    );
};

const mapStateToProps = state => {
    return { birds: state.birds}
}



export default connect(mapStateToProps, { editBird, deleteBird, sawItAgain })(BirdsList);