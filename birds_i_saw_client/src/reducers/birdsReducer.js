export const birdsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BIRDS':
            return action.payload
        case 'ADD_BIRD':
            return [...state, action.payload]
        case 'EDIT_BIRD':
            return [...state, action.payload]
            //right now you're just adding the action payload, you may need to modify that
            default: 
            return state
            
    }
}