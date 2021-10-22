export const birdsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BIRDS':
            return action.payload
        case 'ADD_BIRD':
            return [...state, action.payload]
            default: 
            return state
    }
}