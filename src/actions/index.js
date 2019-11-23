import {EMAIL_CHANGED, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED,LOGIN_USER} from "../types";

import  firebase from 'firebase';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export  const passwordChanged =(text) =>{
    return {
        type:PASSWORD_CHANGED,
        payload: text
    };

};


export const loginUser=({email,password}) =>{
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        console.log(email,password)

        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(user => loginUserSuccess(dispatch, user))
        //     .catch((error) => {
        //         // console.log(error);

        //         // firebase.auth().createUserWithEmailAndPassword(email, password)
        //         //     .then(user => loginUserSuccess(dispatch, user))
        //         //     .catch(() => loginUserFail(dispatch));
        //         loginUserFail(dispatch,error)
        //     });
        if(email=="pawan@gmail.com"&& password=="123456"){
            user=>loginUserSuccess(dispatch, user)
        }
        else{
             
            loginUserFail(dispatch)
        }
    };
};

const loginUserFail=(dispatch,error)=>{
    console.log(error);
    dispatch({type:LOGIN_USER_FAIL});
};

const loginUserSuccess=(dispatch,user)=>{
    console.log(user)
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    });

}