import React, { createContext, useReducer } from 'react'
import initialStates from './initialStates'
import reducers from './reducers'

export const Context = createContext({});

const Provider = ({children}) => {
    
    const [authState, authDispatch] = useReducer(reducers, initialStates)
    const [contactsState, constactsDispatch] = useReducer(reducers, initialStates)
    const [contactState, constactDispatch] = useReducer(reducers, initialStates)
    return (
        <Context.Provider
        value={{
            authState,
            authDispatch,
            contactsState,
            constactsDispatch,
            contactState,
            constactDispatch
        }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider
