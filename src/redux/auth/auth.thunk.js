import * as authActions from './auth.action';
import { AuthApi } from '../../http-access';
import { TOKEN_CYBERSOFT } from '../../util/settings/config';

export const doSignIn = (email, password) => async (dispatch) => {
  dispatch(authActions.signIn());

  try {
    const res = await new AuthApi().dangNhap(TOKEN_CYBERSOFT, {
      model: email,
      password,
    });
    dispatch(authActions.signInSuccessfully(res.content));
  } catch (error) {
    dispatch(authActions.signInFailed(error));
  }
};
