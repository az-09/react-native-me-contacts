

const reducers = (state, {type, payload}) => {
    switch(type){
        case 'LOADING':
            
            return {
                ...state,
                loading: true,
            }
        case 'SUCCESS':
           
            return {
                ...state,
                loading: false,
                data: payload,
            }
        case 'ERROR':
           
            return {
                ...state,
                loading: false,
                error: payload
            }
        case 'LOGIN':
            return state

        case 'GET_CONTACTS':
            return state
        default:
            return state
    }
}

export default reducers