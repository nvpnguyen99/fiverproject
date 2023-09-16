import { ACCESS_TOKEN, USER_FIVER } from "../../util/settings/config";

let usLogin = null;

if(localStorage.getItem(USER_FIVER)){
    usLogin = JSON.parse(localStorage.getItem(USER_FIVER))
}

const initialState = {
   userLogin : usLogin
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {


        case "SIGN_IN":
            state.userLogin = action.account;
            return { ...state }
        case "SIGN_OUT":
            if(state.userLogin){
                localStorage.removeItem(USER_FIVER);
                localStorage.removeItem(ACCESS_TOKEN);
                state.userLogin = null;
                console.log(state);
            }
        return{...state}
        
        case "GET_PROFILE":
            state.userLogin = action.user;
        return {...state}

        default:
            return state
    }
}