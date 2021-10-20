export const birdsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BIRDS':
            return action.payload
            default: 
            return state
    }
}