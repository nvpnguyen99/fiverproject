const SIGN_IN = 'SIGN_IN';
const SIGN_IN_SUCESSFULLY = 'SIGN_IN_SUCESSFULLY';
const SIGN_IN_FAILED = 'SIGN_IN_FAILED';

const SIGN_OUT = 'SIGN_OUT';

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

export {
  SIGN_IN,
  SIGN_IN_SUCESSFULLY,
  SIGN_IN_FAILED,
  SIGN_OUT,
  signIn,
  signInSuccessfully,
  signInFailed,
  signOut,
};
