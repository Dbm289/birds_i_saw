export const fetchBirds = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/birds')
        .then(resp => resp.json())
        .then(birds => dispatch( { type: 'FETCH_BIRDS', payload: birds}))
    }
}

export const addBird = bird => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/birds', {
            method: 'POST',
            body: JSON.stringify(bird),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(birds => dispatch( { type: 'ADD_BIRD', payload: birds}))
    
    }
}


export const editBird = (bird) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/birds/${bird.id}`, {
            method: 'PATCH',
            body: JSON.stringify(bird),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(birds => dispatch( { type: 'EDIT_BIRD', payload: birds}))
    }
    
}

export const deleteBird = (birdId) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/birds/${birdId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(birds => dispatch( { type: 'DELETE_BIRD', payload: {birdId}}))
    }
    
}

export const deleteBirdAction = (e, bird) => {
    e.preventDefault()
    deleteBird(
        bird.id)

}