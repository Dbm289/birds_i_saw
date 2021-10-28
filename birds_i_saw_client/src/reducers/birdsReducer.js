export const birdsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BIRDS':
            return action.payload
        case 'ADD_BIRD':
            return [...state, action.payload]
        case 'DELETE_BIRD':
            return state.filter(bird => 
                action.payload.birdId !== bird.id)
        case 'EDIT_BIRD':
            console.log(state)
            return state.map(bird => {
                if (bird.id !== action.payload.id) {
                    return bird
                }
                console.log(bird, !bird.favorite)
                return {
                    ...bird,
                    favorite: !bird.favorite
                }
            })
            //right now you're just adding the action payload, you may need to modify that
            default: 
            return state
            
    }
}