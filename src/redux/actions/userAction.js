import { quanLyNguoiDung } from "../../services/QuanLyNguoiDungService"
import { ACCESS_TOKEN, USER_FIVER } from "../../util/settings/config"
import toast from 'react-hot-toast';
import { history } from "../../App";

export const signInAction = (account) => {
    return (dispatch2) => {
        let promise = quanLyNguoiDung.signIn(account)
        promise.then((result) => { 
            console.log(result);
            localStorage.setItem(ACCESS_TOKEN, result.data.content.token);

            let userJSON = JSON.stringify(result.data.content.user);
            localStorage.setItem(USER_FIVER,userJSON);

            if(result.data.content.user.role == "ADMIN"){
                history.push('/dashboard');
            } else {
                history.push('/home');
            }
        

            let action = {
                type: "SIGN_IN",
                account: result.data.content.user
            }
            dispatch2(action);
         })
         promise.catch((error) => { 
            console.log(error);
            toast.error('Email hoặc mật khẩu không đúng!');
          })
    }
}

export const signOutAction = () => {
    return {
        type: "SIGN_OUT"
    }
}

export const getProfileAction = (user) => {
    return {
        type: "GET_PROFILE",
        user
    }
}