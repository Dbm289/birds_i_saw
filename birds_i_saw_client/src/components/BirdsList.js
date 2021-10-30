import React from "react";
import { connect } from 'react-redux'
import Bird from './Bird';
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
            {birds.filter((bird) => {
                return bird.favorite === true
            }

            ).map(bird => 
                
               <Bird key={bird.id} bird={bird} deleteBirdAction={deleteBirdAction} toggleFavAction={toggleFavAction} />     
                
            )}
            {birds.filter((bird) => {
                return bird.favorite === false
            }

            ).map(bird => 
                
               <Bird key={bird.id} bird={bird} deleteBirdAction={deleteBirdAction} toggleFavAction={toggleFavAction} />     
                
            )}
            </ul> 
        </div>
    );
};

const mapStateToProps = state => {
    return { birds: state.birds}
}



export default connect(mapStateToProps, { editBird, deleteBird })(BirdsList);