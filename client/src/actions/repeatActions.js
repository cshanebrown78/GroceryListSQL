import axios from 'axios';
import { GET_REPEATS, ADD_REPEAT, DELETE_REPEAT, REPEATS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors} from './errorActions';

export const getRepeats = () => (dispatch, getState) => {
    dispatch(setRepeatsLoading());
    axios
        .get('/api/repeats', tokenConfig(getState))
        .then(res => 
            dispatch({
                type:GET_REPEATS,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const addRepeat = repeat => (dispatch, getState) => {
    console.log("addRepeat =" + JSON.stringify(repeat));
    axios  
        .post('/api/repeats', repeat, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_REPEAT,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteRepeat = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/repeats/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_REPEAT,
                payload: id
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};


export const setRepeatsLoading = () => {
    return {
        type: REPEATS_LOADING
    }
}
