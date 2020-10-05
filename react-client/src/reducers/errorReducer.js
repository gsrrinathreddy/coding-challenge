import {GET_ERRORS} from '../actions/types';

const initialState = {}

// we need all of the initial state here, not just one of the keys.
export default function(state= initialState, action){
    switch(action.type) {
        case GET_ERRORS:
          return action.payload;
        default:
        return state;
       
    }
}  