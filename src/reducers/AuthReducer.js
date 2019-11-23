import {EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL} from "../types";
import {PASSWORD_CHANGED} from "../types";

const INITIAL_STATE = {
    email: '',
    password:'',
    user:'',
    error:'',
    loading:false,
    loggedIn:false,
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state,email:action.payload};
        case PASSWORD_CHANGED:
            return {...state,password: action.payload};
        case LOGIN_USER:
            return{...state,loading: true,error:'',loggedIn: true}
        case LOGIN_USER_SUCCESS:
            return {...state,...INITIAL_STATE,user:action.payload,loggedIn: true};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', password: '', loading: false};
        default:
            return state;
    }
};