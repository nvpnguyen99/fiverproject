const SIGN_IN = 'SIGN_IN';
const SIGN_IN_SUCESSFULLY = 'SIGN_IN_SUCESSFULLY';
const SIGN_IN_FAILED = 'SIGN_IN_FAILED';

const SIGN_OUT = 'SIGN_OUT';

const GET_USER_INFO = 'GET_USER_INFO';
const GET_USER_INFO_SUCESSFULLY = 'GET_USER_INFO_SUCESSFULLY';
const GET_USER_INFO_FAILED = 'GET_USER_INFO_FAILED';

const signIn = (email, password) => ({
  type: SIGN_IN,
  payload: {
    email,
    password,
  },
});

const signInSuccessfully = (signInRes) => ({
  type: SIGN_IN_SUCESSFULLY,
  payload: signInRes,
});

const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  payload: error,
});

const signOut = () => ({ type: SIGN_OUT });

const getUserInfo = ({ token, loginId }) => ({
  type: GET_USER_INFO_SUCESSFULLY,
  payload: { token, loginId },
});

const getUserInfoSuccessfully = (getUserInfoRes) => ({
  type: GET_USER_INFO_SUCESSFULLY,
  payload: getUserInfoRes,
});

const getUserInfoFailed = (error) => ({
  type: GET_USER_INFO_FAILED,
  payload: error,
});

export {
  SIGN_IN,
  SIGN_IN_SUCESSFULLY,
  SIGN_IN_FAILED,
  SIGN_OUT,
  GET_USER_INFO,
  GET_USER_INFO_SUCESSFULLY,
  GET_USER_INFO_FAILED,
  signIn,
  signInSuccessfully,
  signInFailed,
  signOut,
  getUserInfo,
  getUserInfoSuccessfully,
  getUserInfoFailed,
};
