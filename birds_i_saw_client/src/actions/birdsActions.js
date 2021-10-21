export const fetchBirds = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/birds')
        .then(resp => resp.json())
        .then(birds => dispatch( { type: 'FETCH_BIRDS', payload: birds}))
    }
}