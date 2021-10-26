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


export const favBird = bird => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/birds', {
            method: 'PATCH',
            body: JSON.stringify(bird),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(birds => dispatch( { type: 'FAV_BIRD', payload: birds}))
    }
    
}