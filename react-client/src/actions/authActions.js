import axios from 'axios';
import {GET_ERRORS} from './types';

export const registerUser = (userData,history) =>dispatch =>{
   console.log("in actions",userData)
    axios
        .post('/api/register',userData)
        .then(res =>history.push('/login'))
        .catch(err => 
            dispatch({ 
             type:GET_ERRORS,
             payload:err.response.data
         })
    )
}
