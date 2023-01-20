import {
    LOG_IN,
    LOG_OUT,
    HANDLE_ERRORS,
    HANDLE_CHANAGE
} from './actions';

const reducer = (state, action) => {

    if (action.type === LOG_IN) {
        return {
            ...state,
            userId: action.payload.userId,
            userName: action.payload.userName,
            userImage: action.payload.userImage,
            isLoggedIn: true,
            errors : null,
        }
    }


    if (action.type === LOG_OUT) {
        return {
            ...state,
            userId: null,
            isLoggedIn: false,
            errors : null
        }
    }

    if (action.type === HANDLE_ERRORS) {
        return {
            ...state,
            errors : action.payload
        }
    }

    if (action.type === HANDLE_CHANAGE) {
        return {
            ...state,
            ...action.payload
        }
    }

    throw new Error(`no such action : ${action.type}`);
}

export default reducer;