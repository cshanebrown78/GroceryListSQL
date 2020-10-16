import { GET_REPEATS, ADD_REPEAT, DELETE_REPEAT, REPEATS_LOADING } from '../actions/types'

const initialState = {
    repeats: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_REPEATS:
            return {
                ...state,
                repeats: action.payload,
                loading: false
            }
        case DELETE_REPEAT:
            return {
                ...state,
                repeats: state.repeats.filter(repeat => repeat._id !==action.payload)
            }
        case ADD_REPEAT:
            return {
                ...state,
                repeats: [action.payload, ...state.repeats]
            }
        case REPEATS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;    
    }
}