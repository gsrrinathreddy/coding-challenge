import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validations/is-empty';
const initialState = {
    isAuthenticated : false,
    users:{}
}

// we need all of the initial state here, not just one of the keys.
export default function(state= initialState, action){
   
    switch(action.type) {
       case SET_CURRENT_USER : 
           return {
               ...state,
               isAuthenticated : !isEmpty(action.payload),
               user: action.payload
          }
       
        default:
        return state;
       
    }
}  