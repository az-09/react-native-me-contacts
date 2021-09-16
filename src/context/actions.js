import { ERROR, LOADING, SUCCESS } from "../constants/actionTypes"
import axiosInstance from "../helpers/axiosInstance"

export const register = ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name
}) => dispatch => {
    dispatch({
        type: LOADING
    })
    axiosInstance.post('auth/register', {
        email,
        password,
        username,
        first_name,
        last_name
    }).then(res => {
        dispatch({
            type: SUCCESS,
            payload: res.data
        })

    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response ? err.response.data : {error: 'Something wen wrong, try again'}
        })
     })
}