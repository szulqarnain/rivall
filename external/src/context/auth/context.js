import React, { useReducer, useContext, createContext } from 'react';

// Import Cookies
import Cookies from 'js-cookie'

import reducer from './reducer';

import {
    LOG_IN,
    LOG_OUT,
    HANDLE_ERRORS,
    HANDLE_CHANAGE
} from './actions'; 

const initialState = {
    userId: Cookies.get('userId'),
    userName: Cookies.get('userName'),
    userImage: Cookies.get('userImage'),
    isLoggedIn: Cookies.get('userId') ? true : false,
    errors: ""
}

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const setLogIn = async (email,name,image) => {


        try{

            Cookies.set('userId', email);
            Cookies.set('userName', name);
            Cookies.set('userImage', image);

            dispatch({ type: LOG_IN,  payload: {  userId : email , userName : name , userImage : image } });

        }
        catch(e){

            dispatch({ type: HANDLE_ERRORS,  payload: { e } });

        }

    }

    const setLogOut = async () => {

        Cookies.remove('userId');
        Cookies.remove('userName');
        Cookies.remove('userImage');

        dispatch({ type: LOG_OUT });

    }   

    const clearError = async () =>{
        dispatch({ type: HANDLE_ERRORS,  payload: "" });
    }

    const handleChange = async (payload) =>{
        dispatch({ type: HANDLE_CHANAGE,  payload: {...payload} });
    }
    

    return <AuthContext.Provider value={{
        ...state,
        setLogIn,
        setLogOut,
        clearError,
        handleChange
    }}>
        {children}
    </AuthContext.Provider>
}

const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthProvider, initialState, useAuthContext }