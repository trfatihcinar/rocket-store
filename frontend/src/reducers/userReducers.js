import { USER_LOGIN_REQUEST, 
         USER_LOGIN_SUCCESS, 
         USER_LOGIN_FAILURE, 
         USER_LOGOUT,
         USER_REGISTER_REQUEST,
         USER_REGISTER_SUCCESS,
         USER_REGISTER_FAILURE,
         USER_DETAILS_REQUEST,
         USER_DETAILS_SUCCESS,
         USER_DETAILS_FAILURE
        }
from '../constants/userConstants'

export const userLoginReducer = (state = {} , action) => {
    /* this reducer controls the user login state throughout the application */
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload};
        case USER_LOGIN_FAILURE:
            return { loading: false, error: action.payload};
        case USER_LOGOUT:
            return { };
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {} , action) => {
    /* this reducer controls the user register state */
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAILURE:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}

export const userDetailsReducer = (state = {}, action) => {
    /* this reducer is responsible for state management of
       the user details in the application */
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_DETAILS_FAILURE:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}